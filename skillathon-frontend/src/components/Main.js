import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import './Main.css';
import MyInfo from './my-info/MyInfo';
import SideNav from './side-nav/SideNav';
import SkillUp from './skill-up/SkillUp';

const { Header } = Layout;

const Main = () => {
  return (
    <Layout className="main">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <SideNav />
        <Routes>
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/skill-up" element={<SkillUp />} />
          <Route path="/" element={<Navigate to="/my-info" />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default Main;
