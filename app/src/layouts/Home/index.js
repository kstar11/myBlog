import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import router from 'umi/router';

import {
  BookOutlined,
  GithubOutlined,
  HomeOutlined,
  MailOutlined,
  ProjectOutlined,
  ZhihuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Layout, Tooltip } from 'antd';
import styles from './index.module.less';
const { Footer, Sider, Content } = Layout;

@withRouter
export default class MainLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout className={styles.mainContainer} hasSider>
        <Sider
          width="300"
          collapsible
          trigger={null}
          breakpoint="md"
          collapsed={collapsed}
          className={styles.siderMenu}
          theme={collapsed ? 'dark' : 'light'}
          onBreakpoint={broken => this.setState({ collapsed: broken })}
        >
          {!collapsed ? (
            <div>
              <div className={styles.haederBack}></div>
              <div className={styles.avatar}>
                <img src={require('../../assets/cang.png')} />
              </div>
              <div className={styles.description}>
                <ul>
                  <li>倚筝天波观浩渺，苍音掀涛洗星辰</li>
                  <li>白虹贯日扫魔荡，明玥当空照古今</li>
                </ul>
              </div>
              <div className={styles.nickName}>六咸之首</div>
              <div className={styles.links}>
                <ul>
                  <li>
                    <Link to="/">首页</Link>
                  </li>
                  <li>
                    <Link to="/article">文章</Link>
                  </li>
                  <li>
                    <Link to="/category">归档</Link>
                  </li>
                  <li>
                    <Tooltip title="Github" placement="top">
                      <a target="__blank" href="https://github.com/kstar11">
                        <GithubOutlined className={styles.linkIcons} />
                      </a>
                    </Tooltip>
                    <Tooltip title="知乎" placement="top">
                      <a
                        target="__blank"
                        href="https://www.zhihu.com/people/dong-jun-73-31/activities"
                      >
                        <ZhihuOutlined className={styles.linkIcons} />
                      </a>
                    </Tooltip>
                    <Tooltip title="Email" placement="top">
                      <a href="mailto:liuxuanpei@hotmail.com">
                        <MailOutlined className={styles.linkIcons} />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.collapsedBar}>
              <ul>
                <Tooltip placement="right" title="首页">
                  <li>
                    <Link to="/">
                      <HomeOutlined className={styles.linkIcons} />
                    </Link>
                  </li>
                </Tooltip>

                <Tooltip placement="right" title="文章">
                  <li>
                    <Link to="/article">
                      <BookOutlined className={styles.linkIcons} />
                    </Link>
                  </li>
                </Tooltip>
                <Tooltip placement="right" title="归档">
                  <li>
                    <Link to="/category">
                      <ProjectOutlined className={styles.linkIcons} />
                    </Link>
                  </li>
                </Tooltip>
              </ul>
              <ul className={styles.outLinks}>
                <Tooltip title="Github" placement="right">
                  <li>
                    <a target="__blank" href="https://github.com/kstar11">
                      <GithubOutlined className={styles.linkIcons} />
                    </a>
                  </li>
                </Tooltip>
                <Tooltip title="知乎" placement="right">
                  <li>
                    <a
                      target="__blank"
                      href="https://www.zhihu.com/people/dong-jun-73-31/activities"
                    >
                      <ZhihuOutlined className={styles.linkIcons} />
                    </a>
                  </li>
                </Tooltip>
                <Tooltip title="Email" placement="right">
                  <li>
                    <a href="mailto:liuxuanpei@hotmail.com">
                      <MailOutlined className={styles.linkIcons} />
                    </a>
                  </li>
                </Tooltip>
              </ul>
            </div>
          )}
          <div
            onClick={() => this.setState({ collapsed: !collapsed })}
            className={styles.colTrigger}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Sider>
        <Layout>
          <Content className={styles.content}>{this.props.children}</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

MainLayout.prototype = {};
