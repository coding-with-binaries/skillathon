import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal, Typography } from 'antd';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isLoading } from '../../constants/asyncState';
import { ARTICLES, POPULAR_ARTICLES } from '../../constants/feed';
import {
  REQUIREMENT,
  REQUIREMENTS,
  REQUIREMENTS_LABEL_MAP,
} from '../../constants/requirement';
import { useContentProcessing } from '../../hooks';
import { RequirementInputs } from '../common/requirement';
import './Article.css';

const { Title } = Typography;
const Article = () => {
  const { id } = useParams();

  const article = [...ARTICLES, ...POPULAR_ARTICLES].find(
    article => article.id === Number(id)
  );

  const [requirement, setRequirement] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onClickMenuItem = event => {
    setRequirement(event.key);
    setModalVisible(true);
  };

  const menuProps = {
    items: REQUIREMENTS.map(requirement => ({
      key: requirement.value,
      label: requirement.label,
    })),
    onClick: onClickMenuItem,
  };

  const [locale, setLocale] = useState();
  const [lines, setLines] = useState(5);

  const onChangeLines = value => setLines(value);
  const onChangeLocale = value => setLocale(value);

  const onContentProcessSuccess = useCallback(() => {
    if (requirement !== REQUIREMENT.NARRATE) {
      setModalVisible(false);
    }
  }, [requirement]);

  const options = {
    lines,
    locale,
    onSuccess: onContentProcessSuccess,
  };
  const { state, convertedText, processContent, resetContent, stopSpeaking } =
    useContentProcessing(requirement, article.content, options);

  const onCloseModal = () => {
    if (requirement === REQUIREMENT.NARRATE) {
      stopSpeaking();
    }
    setModalVisible(false);
  };

  const onClickBackToOriginal = () => resetContent();

  const loading = isLoading(state);

  return (
    <div className="article">
      <div className="article-content">
        <img
          className="article-image"
          src={article.image}
          alt={article.title}
        />
        <div className="article-content-text">
          <div className="article-content-header">
            <Title style={{ margin: 0 }} level={1}>
              {article.title}
            </Title>
            {convertedText ? (
              <Button type="text" onClick={onClickBackToOriginal}>
                Back to original
              </Button>
            ) : (
              <Dropdown menu={menuProps} trigger={['click']}>
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<EllipsisOutlined />}
                />
              </Dropdown>
            )}
          </div>
          <div className="article-content-body">
            {convertedText ?? article?.content}
          </div>
        </div>
      </div>
      <Modal
        title={REQUIREMENTS_LABEL_MAP[requirement]}
        open={modalVisible}
        onCancel={onCloseModal}
        footer={[
          <Button key="back" onClick={onCloseModal}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={processContent}
          >
            {REQUIREMENTS_LABEL_MAP[requirement]}
          </Button>,
        ]}
      >
        <RequirementInputs
          requirement={requirement}
          loading={loading}
          lines={lines}
          onChangeLines={onChangeLines}
          locale={locale}
          onChangeLocale={onChangeLocale}
          skipText
        />
      </Modal>
    </div>
  );
};

export default Article;
