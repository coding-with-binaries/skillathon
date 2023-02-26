import { Select } from 'antd';
import { useState } from 'react';
import { REQUIREMENTS } from '../../constants/requirement';
import './Content.css';
import Requirement from './Requirement';

const Content = () => {
  const [requirement, setRequirement] = useState(null);

  const onChange = value => {
    setRequirement(value);
  };

  return (
    <div className="content">
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

export default Content;
