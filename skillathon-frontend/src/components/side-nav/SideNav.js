import { Layout, Menu, theme } from 'antd';
import SideNavItems from './SideNavItems';

const { Sider } = Layout;

const SideNav = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={240} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        items={SideNavItems}
      />
    </Sider>
  );
};

export default SideNav;
