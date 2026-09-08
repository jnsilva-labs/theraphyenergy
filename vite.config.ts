import { existsSync } from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Vercel resolves directory indexes at extensionless URLs. Vite preview's SPA
// fallback otherwise sends the home page for /booking and /es/booking.
const prerenderedPreview = (): Plugin => ({
  name: "prerendered-directory-preview",
  configurePreviewServer(server) {
    const outputRoot = path.resolve(server.config.root, server.config.build.outDir);
    server.middlewares.use((request, _response, next) => {
      if (!request.url || !["GET", "HEAD"].includes(request.method ?? "GET")) return next();
      try {
        const url = new URL(request.url, "http://localhost");
        const pathname = decodeURIComponent(url.pathname);
        const indexFile = path.resolve(outputRoot, `.${pathname}`, "index.html");
        if (indexFile.startsWith(`${outputRoot}${path.sep}`) && existsSync(indexFile)) {
          request.url = `${url.pathname.replace(/\/$/, "")}/index.html${url.search}`;
        }
      } catch {
        // Let the static server handle malformed URL paths.
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), prerenderedPreview()],
  ssr: {
    noExternal: ["react-helmet-async"]
  }
});
