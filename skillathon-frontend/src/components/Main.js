import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Article from './article/Article';
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
          <img src="/logo.png" alt="" style={{ height: 48 }} />
          <span className="header-title-main">Skill-a-thon</span>| Celebrating
          Differentiability
        </div>
      </Header>
      <Layout>
        <SideNav />
        <div className="main-core">
          <Routes>
            <Route path="/learn" element={<Feed />} />
            <Route path="/my-info" element={<MyInfo />} />
            <Route path="/magic-tools" element={<Content />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="*" element={<Navigate to="/learn" />} />
          </Routes>
        </div>
      </Layout>
    </Layout>
  );
};

export default Main;
