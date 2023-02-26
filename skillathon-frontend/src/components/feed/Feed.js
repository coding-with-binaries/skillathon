import { Avatar, Card, Image, Typography } from 'antd';
import { ARTICLES } from '../../constants/feed';
import './Feed.css';

const { Meta } = Card;
const { Title } = Typography;

const Feed = () => {
  return (
    <div className="feed">
      <Title level={3}>My Top Picks</Title>
      <div className="top-articles">
        {ARTICLES.map(article => (
          <Card
            key={article.id}
            hoverable
            style={{ width: 300 }}
            cover={<Image alt="example" src={article.image} />}
          >
            <Meta
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
