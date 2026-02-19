import { en, type Translations } from './en';
import { es } from './es';

export const translations: Record<string, Translations> = { en, es };

export function getTranslations(lang: string): Translations {
  return translations[lang] || en;
}

export type { Translations };
