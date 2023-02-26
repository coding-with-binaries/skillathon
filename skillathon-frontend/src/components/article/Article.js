import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal, Typography } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentApi } from '../../api/Content';
import { ASYNC_STATE, isLoading } from '../../constants/asyncState';
import { ARTICLES } from '../../constants/feed';
import { REQUIREMENT, REQUIREMENTS } from '../../constants/requirement';
import { RequirementInputs } from '../common/requirement';
import './Article.css';

const { Title } = Typography;
const Article = () => {
  const { id } = useParams();

  const article = ARTICLES.find(article => article.id === Number(id));

  const [requirement, setRequirement] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onClickMenuItem = event => {
    setRequirement(event.key);
    setModalVisible(true);
  };

  const onCloseModal = () => setModalVisible(false);

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

  const [state, setState] = useState(ASYNC_STATE.NOT_STARTED);
  const [convertedText, setConvertedText] = useState(null);

  const onClickBackToOriginal = () => setConvertedText(null);

  const onClickProcess = async () => {
    try {
      setState(ASYNC_STATE.IN_PROGRESS);
      if (requirement === REQUIREMENT.SUMMARIZE) {
        const output = await ContentApi.summarizeContent(
          article.content,
          lines
        );
        setConvertedText(output);
      } else if (requirement === REQUIREMENT.TRANSLATE) {
        const output = await ContentApi.translateContent(
          article.content,
          locale
        );
        setConvertedText(output);
      } else if (requirement === REQUIREMENT.SUMMARIZE_AND_TRANSLATE) {
        const output = await ContentApi.summarizeAndTranslateContent(
          article.content,
          locale,
          lines
        );
        setConvertedText(output);
      }
      setState(ASYNC_STATE.SUCCESS);
      setModalVisible(false);
    } catch {
      setState(ASYNC_STATE.FAILED);
    }
  };

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
        title="Select options"
        open={modalVisible}
        onCancel={onCloseModal}
        footer={[
          <Button key="back" onClick={onCloseModal}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={onClickProcess}
          >
            Process
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
