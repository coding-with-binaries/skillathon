export const REQUIREMENT = {
  SUMMARIZE: 'summarize',
  TRANSLATE: 'translate',
  NARRATE: 'narrate',
  SUMMARIZE_AND_TRANSLATE: 'summarize_and_translate',
  SUMMARIZE_AND_NARRATE: 'summarize_and_narrate',
  TRANSLATE_AND_NARRATE: 'translate_and_narrate',
  SUMMARIZE_TRANSLATE_AND_NARRATE: 'summarize_translate_and_narrate',
};

export const REQUIREMENTS = [
  {
    label: 'Summarize',
    value: REQUIREMENT.SUMMARIZE,
  },
  {
    label: 'Translate',
    value: REQUIREMENT.TRANSLATE,
  },
  {
    label: 'Narrate',
    value: REQUIREMENT.NARRATE,
  },
  {
    label: 'Summarize & Translate',
    value: REQUIREMENT.SUMMARIZE_AND_TRANSLATE,
  },
  {
    label: 'Summarize & Narrate',
    value: REQUIREMENT.SUMMARIZE_AND_NARRATE,
  },
  {
    label: 'Translate & Narrate',
    value: REQUIREMENT.TRANSLATE_AND_NARRATE,
  },
  {
    label: 'Summarize, Translate & Narrate',
    value: REQUIREMENT.SUMMARIZE_TRANSLATE_AND_NARRATE,
  },
];

export const REQUIREMENTS_LABEL_MAP = REQUIREMENTS.reduce((acc, req) => {
  return {
    ...acc,
    [req.value]: req.label,
  };
}, {});

export const isTranslationRequirement = requirement =>
  [
    REQUIREMENT.TRANSLATE,
    REQUIREMENT.SUMMARIZE_AND_TRANSLATE,
    REQUIREMENT.TRANSLATE_AND_NARRATE,
    REQUIREMENT.SUMMARIZE_TRANSLATE_AND_NARRATE,
  ].includes(requirement);

export const isSummarizationRequirement = requirement =>
  [
    REQUIREMENT.SUMMARIZE,
    REQUIREMENT.SUMMARIZE_AND_TRANSLATE,
    REQUIREMENT.SUMMARIZE_AND_NARRATE,
    REQUIREMENT.SUMMARIZE_TRANSLATE_AND_NARRATE,
  ].includes(requirement);

export const isNarrationRequirement = requirement =>
  [
    REQUIREMENT.NARRATE,
    REQUIREMENT.SUMMARIZE_AND_NARRATE,
    REQUIREMENT.TRANSLATE_AND_NARRATE,
    REQUIREMENT.SUMMARIZE_TRANSLATE_AND_NARRATE,
  ].includes(requirement);

export const LOCALES = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Bengali',
    value: 'bn',
  },
  {
    label: 'Gujarati',
    value: 'gu',
  },
  {
    label: 'Kannada',
    value: 'kn',
  },
  {
    label: 'Maithili',
    value: 'mai',
  },
  {
    label: 'Malayalam',
    value: 'ml',
  },
  {
    label: 'Marathi',
    value: 'mr',
  },
  {
    label: 'Punjabi',
    value: 'pa',
  },
  {
    label: 'Tamil',
    value: 'ta',
  },
];
