import messages from "@/content/messages.json";
export type Lang = keyof typeof messages;
export type MessageKey = keyof typeof messages.en;
export const langs = Object.keys(messages) as Lang[];
export const locale: Record<
  Lang,
  { label: string; html: string; intl: string }
> = {
  en: { label: "English", html: "en", intl: "en-US" },
  "zh-cn": { label: "简体中文", html: "zh-Hans", intl: "zh-CN" },
  fr: { label: "Français", html: "fr", intl: "fr-FR" },
  pt: { label: "Português", html: "pt", intl: "pt-PT" },
  ko: { label: "한국어", html: "ko", intl: "ko-KR" },
  ja: { label: "日本語", html: "ja", intl: "ja-JP" },
  ru: { label: "Русский", html: "ru", intl: "ru-RU" },
  fa: { label: "فارسی", html: "fa", intl: "fa-IR" },
};
export function t(lang: Lang, key: MessageKey) {
  return messages[lang][key];
}
