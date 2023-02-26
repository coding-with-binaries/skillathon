import { EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import { Avatar, Card, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ARTICLES, POPULAR_ARTICLES } from '../../constants/feed';
import './Feed.css';

const { Meta } = Card;
const { Title } = Typography;

const Feed = () => {
  const navigate = useNavigate();
  const onClickArticle = id => () => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="feed">
      <Title style={{ marginTop: 0 }} level={3}>
        My Top Picks
      </Title>
      <div className="top-articles">
        {ARTICLES.map(article => (
          <Card
            key={article.id}
            hoverable
            style={{ width: 300 }}
            cover={<Image alt="example" src={article.image} height={180} />}
            actions={[
              <HeartOutlined key="setting" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            onClick={onClickArticle(article.id)}
          >
            <Meta
              className="article-card-body"
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title={article.title}
              description={article.description}
            />
          </Card>
        ))}
      </div>
      <Title level={3}>Popular on Skill-a-thon</Title>
      <div className="top-articles">
        {POPULAR_ARTICLES.map(article => (
          <Card
            key={article.id}
            hoverable
            style={{ width: 300 }}
            cover={<Image alt="example" src={article.image} height={180} />}
            actions={[
              <HeartOutlined key="setting" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            onClick={onClickArticle(article.id)}
          >
            <Meta
              className="article-card-body"
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title={article.title}
              description={article.description}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Feed;
