import { Button, Typography } from 'antd';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { isLoading, isSuccess } from '../../constants/asyncState';
import { REQUIREMENTS_LABEL_MAP } from '../../constants/requirement';
import { useContentProcessing } from '../../hooks';
import { RequirementInputs, RequirementOutput } from '../common/requirement';

const { Title } = Typography;

const Requirement = ({ requirement }) => {
  const [locale, setLocale] = useState();
  const [voiceIndex, setVoiceIndex] = useState();
  const [lines, setLines] = useState(5);
  const [text, setText] = useState('');

  const onChangeLines = value => setLines(value);
  const onChangeVoiceIndex = value => setVoiceIndex(value);
  const onChangeLocale = value => setLocale(value);
  const onChangeText = event => setText(event.target.value);

  const { voices: supportedVoices } = useSpeechSynthesis();
  const options = {
    lines,
    locale,
    voice: supportedVoices[voiceIndex],
  };
  const { state, convertedText, processContent, stopSpeaking } =
    useContentProcessing(requirement, text, options);

  const loading = isLoading(state);
  const success = isSuccess(state);

  return (
    <div>
      <Title level={2}>{REQUIREMENTS_LABEL_MAP[requirement]}</Title>
      <div className="requirement-partition">
        <RequirementInputs
          supportedVoices={supportedVoices}
          requirement={requirement}
          loading={loading}
          lines={lines}
          onChangeLines={onChangeLines}
          locale={locale}
          onChangeLocale={onChangeLocale}
          voiceIndex={voiceIndex}
          onChangeVoiceIndex={onChangeVoiceIndex}
          text={text}
          onChangeText={onChangeText}
        />
        <Button
          className="submit-requirement"
          type="primary"
          onClick={processContent}
          loading={loading}
        >
          {'>>>'}
        </Button>
        {success && (
          <RequirementOutput
            text={convertedText}
            requirement={requirement}
            stopSpeaking={stopSpeaking}
          />
        )}
      </div>
    </div>
  );
};

export default Requirement;
