import { Button, Typography } from 'antd';
import { useState } from 'react';
import { isLoading, isSuccess } from '../../constants/asyncState';
import { REQUIREMENTS_LABEL_MAP } from '../../constants/requirement';
import { useContentProcessing } from '../../hooks';
import { RequirementInputs, RequirementOutput } from '../common/requirement';

const { Title } = Typography;

const Requirement = ({ requirement }) => {
  const [locale, setLocale] = useState();
  const [lines, setLines] = useState(5);
  const [text, setText] = useState('');

  const onChangeLines = value => setLines(value);
  const onChangeLocale = value => setLocale(value);
  const onChangeText = event => setText(event.target.value);

  const options = {
    lines,
    locale,
  };
  const { state, convertedText, processContent } = useContentProcessing(
    requirement,
    text,
    options
  );

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
          onClick={processContent}
          loading={loading}
        >
          {'>>>'}
        </Button>
        {success && (
          <RequirementOutput text={convertedText} requirement={requirement} />
        )}
      </div>
    </div>
  );
};

export default Requirement;
