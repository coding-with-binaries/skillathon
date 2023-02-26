import { Button, Input, InputNumber, Select, Typography } from 'antd';
import { useState } from 'react';
import { ContentApi } from '../../api/Content';
import { ASYNC_STATE, isLoading, isSuccess } from '../../constants/asyncState';
import {
  isSummarizationRequirement,
  isTranslationRequirement,
  LOCALES,
  REQUIREMENT,
  REQUIREMENTS_LABEL_MAP,
} from '../../constants/requirement';

const { Title } = Typography;
const { TextArea } = Input;

const RequirementInputs = ({
  requirement,
  loading,
  locale,
  onChangeLocale,
  lines,
  onChangeLines,
  text,
  onChangeText,
}) => {
  return (
    <div>
      {isTranslationRequirement(requirement) && (
        <div>
          <Select
            style={{
              width: 240,
              marginBottom: 12,
            }}
            value={locale}
            placeholder="Select translation language"
            onChange={onChangeLocale}
            options={LOCALES}
            disabled={loading}
          />
        </div>
      )}
      {isSummarizationRequirement(requirement) && (
        <div>
          <InputNumber
            style={{ marginBottom: 12 }}
            value={lines}
            onChange={onChangeLines}
            disabled={loading}
          />
        </div>
      )}
      <TextArea
        placeholder="Enter text"
        rows={25}
        value={text}
        onChange={onChangeText}
        disabled={loading}
      />
    </div>
  );
};

const RequirementOutput = ({ text }) => {
  return (
    <div>
      <p className="requirement-output-title">Converted Text</p>
      <div className="requirement-output">{text}</div>
    </div>
  );
};

const Requirement = ({ requirement }) => {
  const [locale, setLocale] = useState();
  const [lines, setLines] = useState(5);
  const [text, setText] = useState('');

  const onChangeLines = value => setLines(value);
  const onChangeLocale = value => setLocale(value);
  const onChangeText = event => setText(event.target.value);

  const [state, setState] = useState(ASYNC_STATE.NOT_STARTED);
  const [convertedText, setConvertedText] = useState('');

  const onClickSubmit = async () => {
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
      }
      setState(ASYNC_STATE.SUCCESS);
    } catch {
      setState(ASYNC_STATE.FAILED);
    }
  };

  const loading = isLoading(state);
  const success = isSuccess(state);

  return (
    <div>
      <Title level={2}>{REQUIREMENTS_LABEL_MAP[requirement]}</Title>
      <div className="requirement-partition">
        <RequirementInputs
          requirement={requirement}
          loading={loading}
          lines={lines}
          onChangeLines={onChangeLines}
          locale={locale}
          onChangeLocale={onChangeLocale}
          text={text}
          onChangeText={onChangeText}
        />
        <Button
          className="submit-requirement"
          type="primary"
          onClick={onClickSubmit}
          loading={loading}
        >
          {'>>>'}
        </Button>
        {success && <RequirementOutput text={convertedText} />}
      </div>
    </div>
  );
};

export default Requirement;
