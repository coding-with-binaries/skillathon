import axios from 'axios';

const TRANSLATE_URL = '/translate';

const SUMMARIZE_URL = '/summarize';

const SUMMARIZE_AND_TRANSLATE_URL = '/summarize_and_translate';

export class SkillApi {
  static async translateContent(text, locale) {
    const res = await axios.post(TRANSLATE_URL, { text, to: locale });
    return res.data;
  }

  static async summarizeContent(text, lines) {
    const res = await axios.post(SUMMARIZE_URL, { text, lines });
    return res.data;
  }

  static async summarizeAndTranslateContent(text, locale, lines) {
    const res = await axios.post(SUMMARIZE_AND_TRANSLATE_URL, {
      text,
      to: locale,
      lines,
    });
    return res.data;
  }
}
