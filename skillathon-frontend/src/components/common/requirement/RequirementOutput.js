import { PauseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { isNarrationRequirement } from '../../../constants/requirement';
import './RequirementOutput.css';

const RequirementOutput = ({ text, requirement, stopSpeaking }) => {
  return (
    <div>
      <p className="requirement-output-title">Output</p>
      {isNarrationRequirement(requirement) ? (
        <div className="requirement-output-voice">
          <div className="requirement-voice-toolbar">
            <Button
              type="text"
              shape="circle"
              icon={<PauseOutlined />}
              size="large"
              onClick={stopSpeaking}
            />
          </div>
        </div>
      ) : (
        <div className="requirement-output-text">{text}</div>
      )}
    </div>
  );
};

export default RequirementOutput;
