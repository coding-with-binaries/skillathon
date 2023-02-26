export const REQUIREMENT = {
  SUMMARIZE: 'summarize',
  TRANSLATE: 'translate',
  SUMMARIZE_AND_TRANSLATE: 'summarize_and_translate',
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
    label: 'Summarize & Translate',
    value: REQUIREMENT.SUMMARIZE_AND_TRANSLATE,
  },
];

export const REQUIREMENTS_LABEL_MAP = REQUIREMENTS.reduce((acc, req) => {
  return {
    ...acc,
    [req.value]: req.label,
  };
}, {});

export const isTranslationRequirement = requirement =>
  [REQUIREMENT.TRANSLATE, REQUIREMENT.SUMMARIZE_AND_TRANSLATE].includes(
    requirement
  );

export const isSummarizationRequirement = requirement =>
  [REQUIREMENT.SUMMARIZE, REQUIREMENT.SUMMARIZE_AND_TRANSLATE].includes(
    requirement
  );

export const LOCALES = [
  {
    label: 'Hindi',
    value: 'hi',
  },
];
