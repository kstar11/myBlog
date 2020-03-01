import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import { CalendarOutlined } from '@ant-design/icons';
import { Layout, Card, List, Typography } from 'antd';
import Link from 'umi/link';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import styles from './index.module.less';

const html =
  '#### egg \n' +
  'egg我并未使用egg脚手架生成，不是特别习惯使用egg脚手架，自己搭建更适合练手，加深配置记忆；' +
  '目前用习惯了的就是egg，egg-script，egg-view-assets' +
  '当然，少不了开发模式下专用的egg-bin' +
  '至于eslint和prettier这些，完全遵照个人喜好~ \n' +
  '#### umi \n' +
  'umi也没有使用create umi脚手架，还是老样子，自己搭建才能更好练手~' +
  'umi结合egg做SSR同构渲染的方案，umi的官方文档很详细了，就是使用umi-server的render，umi-server的源码并不复杂，多多研究一下便能知晓其中奥秘；\n' +
  '#### MongoDB \n' +
  'MongoDB的安装无需多讲，个人习惯了3.6版本的配置方式，故一直使用3.6.x版本，mongod.conf文件从网上摘抄所得，只是目前工程还未成型，所以放弃了auth，后续会加上；' +
  '而node与MongoDB的连接当然采用egg-mongoose了，用法基本与mongoose一致，sequelize还是更喜欢搭配mysql使用~' +
  '当然也是因为博客的数据库操作不多，杀鸡用不上牛刀~\n' +
  '#### React \n' +
  'react使用16+版本，当前最火的hook怎么可能放弃不用！？然而本人对于hook理解不深，写这个博客也是希望在运用之中加深理解，如有不足之处，还请指正！' +
  'redux直接采用dva了，方便快捷；' +
  'UI样式则必须是最爱的ant design！';
function Index() {
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
                <ReactMarkdown source={html} escapeHtml={false} />
              </Typography.Paragraph>
            </Card>
          );
        }}
      />
    </Layout>
  );
}
export default Index;
