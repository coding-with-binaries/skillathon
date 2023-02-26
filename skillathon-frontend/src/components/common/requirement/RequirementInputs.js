import { Input, InputNumber, Select } from 'antd';
import {
  isSummarizationRequirement,
  isTranslationRequirement,
  LOCALES,
} from '../../../constants/requirement';

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
  skipText = false,
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
          Create short summary of{' '}
          <InputNumber
            style={{ marginBottom: 12 }}
            value={lines}
            onChange={onChangeLines}
            disabled={loading}
          />{' '}
          lines
        </div>
      )}
      {!skipText && (
        <TextArea
          placeholder="Enter text"
          rows={25}
          value={text}
          onChange={onChangeText}
          disabled={loading}
        />
      )}
    </div>
  );
};

export default RequirementInputs;