import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");
const templatePath = path.join(distDir, "index.html");
const entryServerPath = path.join(serverDir, "entry-server.js");

const { prerenderRoutes, render, baseUrl } = await import(pathToFileURL(entryServerPath).href);
const template = await readFile(templatePath, "utf8");

const injectPage = (result) => {
  return template
    .replace(/<html[^>]*>/, `<html ${result.htmlAttributes}>`)
    .replace(/<body[^>]*>/, result.bodyAttributes ? `<body ${result.bodyAttributes}>` : "<body>")
    .replace("<!--app-head-->", result.head)
    .replace('<div id="root"></div>', `<div id="root">${result.appHtml}</div>`);
};

const outputPathForRoute = (routePath) => {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  if (routePath === "/404") {
    return path.join(distDir, "404.html");
  }

  const normalized = routePath.replace(/^\//, "");
  return path.join(distDir, normalized, "index.html");
};

for (const route of prerenderRoutes) {
  const rendered = render(route.path);
  const filePath = outputPathForRoute(route.path);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, injectPage(rendered), "utf8");
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = prerenderRoutes
  .filter((route) => route.indexable !== false)
  .map((route) => {
    const loc = `${baseUrl}${route.path}`;
    const englishPath = route.path.replace(/^\/es(?=\/|$)/, "") || "/";
    const spanishPath = `/es${englishPath === "/" ? "" : englishPath}`;
    const alternates = [["en", englishPath], ["es", spanishPath], ["x-default", englishPath]]
      .map(([language, routePath]) => `\n    <xhtml:link rel="alternate" hreflang="${language}" href="${baseUrl}${routePath}" />`).join("");
    const priority =
      typeof route.priority === "number"
        ? `\n    <priority>${route.priority.toFixed(1)}</priority>`
        : "";

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>${alternates}${priority}\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
await rm(serverDir, { recursive: true, force: true });
