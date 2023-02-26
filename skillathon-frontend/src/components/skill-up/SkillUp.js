import { Select } from 'antd';
import { useState } from 'react';
import { REQUIREMENTS } from '../../constants/requirement';
import Requirement from './Requirement';
import './SkillUp.css';

const SkillUp = () => {
  const [requirement, setRequirement] = useState(null);

  const onChange = value => {
    setRequirement(value);
  };

  return (
    <div className="skill-up">
      <Select
        style={{
          width: 240,
        }}
        placeholder="Select your requirement"
        value={requirement}
        onChange={onChange}
        options={REQUIREMENTS}
      />
      {requirement && <Requirement requirement={requirement} />}
    </div>
  );
};

export default SkillUp;
