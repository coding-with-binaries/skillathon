import { HomeOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideNavItems = [
  {
    label: <Link to="/learn">Learn</Link>,
    key: 'feed',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/magic-tools">Magic Tools</Link>,
    key: 'content',
    icon: <LaptopOutlined />,
  },
  {
    label: <Link to="/my-info">My information</Link>,
    key: 'info',
    icon: <UserOutlined />,
  },
];

export default SideNavItems;
