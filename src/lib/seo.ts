export const buildTitle = (pageTitle: string, baseTitle: string) =>
  `${pageTitle} - ${baseTitle}`;

export const buildDescription = (description: string | undefined, fallback: string) =>
  description ?? fallback;

export const buildOgUrl = (baseUrl: string, path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalized}`;
};
