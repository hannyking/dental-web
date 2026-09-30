export const languages = {
  'zh-hant': '繁體',
  'zh-hans': '简体',
  en: 'EN',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'zh-hant';
export const locales = Object.keys(languages) as Locale[];

export const htmlLang: Record<Locale, string> = {
  'zh-hant': 'zh-Hant-HK',
  'zh-hans': 'zh-Hans',
  en: 'en',
};

export function getLocalePath(locale: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '' ? '/' : clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybe] = url.pathname.split('/');
  if (maybe && maybe in languages) return maybe as Locale;
  return defaultLocale;
}
