import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './FullLoader.css';

const LoadingIcon = ({ size }) => (
  <LoadingOutlined
    style={{
      fontSize: size ?? 48,
    }}
    spin
  />
);

const FullLoader = ({ message, size }) => {
  const tip = message ?? 'Fetching details. Please wait...';
  return (
    <div className="full-loader">
      <Spin indicator={<LoadingIcon size={size} />} tip={tip} />
    </div>
  );
};

export default FullLoader;
