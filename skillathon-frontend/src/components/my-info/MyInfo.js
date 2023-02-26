import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tag, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { ProfileApi } from '../../api/Profile';
import {
  ASYNC_STATE,
  isFailed,
  isInitializing,
} from '../../constants/asyncState';
import FullLoader from '../common/loader/FullLoader';
import './MyInfo.css';

const { Title } = Typography;

const colors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

const MyBasicInfo = ({ name }) => {
  return (
    <div className="my-basic-info">
      <Avatar size={128} icon={<UserOutlined />} />
      <Title level={3}>{name}</Title>
    </div>
  );
};

const MySkills = ({ skills, requiredSkills }) => {
  return (
    <div>
      <div className="skills-i-have">
        <strong style={{ marginRight: 8 }}>Skills I have:</strong>
        {skills?.map(skill => (
          <Tag color={getRandomColor()}>{skill}</Tag>
        ))}
      </div>
      <div className="skills-i-want">
        <strong style={{ marginRight: 8 }}>Skills I want:</strong>
        {requiredSkills?.map(skill => (
          <Tag color={getRandomColor()}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
};

const MyInfo = () => {
  const [state, setState] = useState(ASYNC_STATE.NOT_STARTED);
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = useCallback(async () => {
    try {
      setState(ASYNC_STATE.IN_PROGRESS);

      const data = await ProfileApi.getProfileDetails();
      setProfileData(data);

      setState(ASYNC_STATE.SUCCESS);
    } catch {
      setState(ASYNC_STATE.FAILED);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  return (
    <div className="my-info">
      {isInitializing(state) ? (
        <FullLoader message="Fetching user profile information. Please wait..." />
      ) : isFailed(state) ? (
        <p>Failed</p>
      ) : (
        profileData && (
          <>
            <MyBasicInfo name={profileData.name} />
            <MySkills
              skills={profileData.skills}
              requiredSkills={profileData.requiredSkills}
            />
          </>
        )
      )}
    </div>
  );
};

export default MyInfo;
