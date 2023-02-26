import axios from 'axios';

const BASE_URL = '/content';

const TRANSLATE_URL = `${BASE_URL}/translate`;
const SUMMARIZE_URL = `${BASE_URL}/summarize`;
const SUMMARIZE_AND_TRANSLATE_URL = `${BASE_URL}/summarize-and-translate`;

export class ContentApi {
  static async translateContent(text, locale) {
    const res = await axios.post(TRANSLATE_URL, { text, to: locale });
    return res.data.translated;
  }

  static async summarizeContent(text, lines) {
    const res = await axios.post(SUMMARIZE_URL, { text, lines });
    return res.data.summary;
  }

  static async summarizeAndTranslateContent(text, locale, lines) {
    const res = await axios.post(SUMMARIZE_AND_TRANSLATE_URL, {
      text,
      to: locale,
      lines,
    });
    return res.data.translated_summary;
  }
}
