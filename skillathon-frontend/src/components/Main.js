import { LinkedinFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Content from './content/Content';
import Feed from './feed/Feed';
import './Main.css';
import MyInfo from './my-info/MyInfo';
import SideNav from './side-nav/SideNav';

const { Header } = Layout;

const Main = () => {
  return (
    <Layout className="main">
      <Header className="header">
        <div className="header-title">
          <LinkedinFilled />
          Skill-a-thon
        </div>
      </Header>
      <Layout>
        <SideNav />
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/content" element={<Content />} />
          <Route path="/" element={<Navigate to="/feed" />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default Main;
