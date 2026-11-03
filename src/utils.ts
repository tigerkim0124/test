import { Language } from './types';

/**
 * Directly downloads the company brochure PDF without opening any modal dialog or explanation popup.
 */
export function downloadBrochurePdf(lang: Language): void {
  const downloadName = lang === 'ko' ? '맥섬석GM_종합회사소개서_2026.pdf' : 'Macsumsuk_GM_Company_Profile_2026.pdf';
  const link = document.createElement('a');
  link.href = '/Macsumsuk_GM_Company_Profile_2026.pdf';
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
