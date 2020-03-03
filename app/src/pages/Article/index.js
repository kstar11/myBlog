import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import { CalendarOutlined } from '@ant-design/icons';
import { Layout, Card, List, Typography } from 'antd';
import Link from 'umi/link';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import styles from './index.module.less';

function Article() {
  const [artList, setArtList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await request('/api/articles');
      setArtList(result.data.data);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <List
        loading={artList.length < 1}
        dataSource={artList}
        itemLayout="vertical"
        size="large"
        renderItem={item => {
          return (
            <Card
              className={styles.card}
              hoverable
              headStyle={{ borderLeft: '5px solid #4d4d4d' }}
              title={
                <Link className={styles.articleTitle} to={`/articles/${item._id}`}>
                  {item.title}
                </Link>
              }
              extra={
                <span className={styles.extra}>
                  <CalendarOutlined className={styles.calendarIcon} />
                  {moment(item.createTime).format('YYYY-MM-DD')}
                </span>
              }
            >
              <Typography.Paragraph>
                <ReactMarkdown source={item.description} escapeHtml={false} />
              </Typography.Paragraph>
            </Card>
          );
        }}
      />
    </Layout>
  );
}
export default Article;
