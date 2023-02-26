import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
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

const MyBasicInfo = ({ name }) => {
  return (
    <div className="my-basic-info">
      <Avatar size={128} icon={<UserOutlined />} />
      <Title level={3}>{name}</Title>
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
        profileData && <MyBasicInfo name={profileData.name} />
      )}
    </div>
  );
};

export default MyInfo;
