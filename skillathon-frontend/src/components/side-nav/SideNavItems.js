import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideNavItems = [
  {
    label: <Link to="/my-info">My information</Link>,
    key: 'info',
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/skill-up">Skill Up</Link>,
    key: 'skill',
    icon: <LaptopOutlined />,
  },
];

export default SideNavItems;
