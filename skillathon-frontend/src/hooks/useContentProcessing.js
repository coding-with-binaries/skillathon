import { useCallback, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { ContentApi } from '../api/Content';
import { ASYNC_STATE } from '../constants/asyncState';
import { REQUIREMENT } from '../constants/requirement';

function useContentProcessing(requirement, text, options) {
  const { lines, locale, onSuccess, onFailure } = options;
  const [state, setState] = useState(ASYNC_STATE.NOT_STARTED);
  const [convertedText, setConvertedText] = useState(null);

  const { speak, cancel: stopSpeaking } = useSpeechSynthesis();

  const resetContent = useCallback(() => {
    setConvertedText(null);
  }, []);

  const processContent = useCallback(async () => {
    try {
      setState(ASYNC_STATE.IN_PROGRESS);
      if (requirement === REQUIREMENT.SUMMARIZE) {
        const output = await ContentApi.summarizeContent(text, lines);
        setConvertedText(output);
      } else if (requirement === REQUIREMENT.TRANSLATE) {
        const output = await ContentApi.translateContent(text, locale);
        setConvertedText(output);
      } else if (requirement === REQUIREMENT.SUMMARIZE_AND_TRANSLATE) {
        const output = await ContentApi.summarizeAndTranslateContent(
          text,
          locale,
          lines
        );
        setConvertedText(output);
      } else if (requirement === REQUIREMENT.NARRATE) {
        speak({ text });
      }
      setState(ASYNC_STATE.SUCCESS);
      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setState(ASYNC_STATE.FAILED);
      if (onFailure) {
        onFailure();
      }
    }
  }, [requirement, text, onSuccess, onFailure, lines, locale, speak]);

  return { state, convertedText, resetContent, processContent, stopSpeaking };
}

export default useContentProcessing;
