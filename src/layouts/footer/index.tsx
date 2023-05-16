import { Col, Row } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';
import styles from './index.less';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Row gutter={[0, 30]}>
        <Col span={24} lg={10}>
          <div className={styles.join}>
            <FormattedMessage id="layout.JoinOurCommunity" />
          </div>
          <div className={styles.content}>
            <FormattedMessage id="layout.FooterP1" />
            <FormattedMessage id="layout.FooterP2" />
          </div>
        </Col>
        <Col span={6} lg={{ span: 4, offset: 2 }}>
          <div className={styles.title}>
            <FormattedMessage id="layout.AboutUs" />
          </div>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Team" />
          </a>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Blogs" />
          </a>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Careers" />
          </a>
        </Col>
        <Col span={9} offset={3} lg={{ span: 4, offset: 0 }}>
          <div className={styles.title}>
            <FormattedMessage id="layout.Technology" />
          </div>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Github" />
          </a>
        </Col>
        <Col span={6} lg={{ span: 4 }}>
          <div className={styles.title}>
            <FormattedMessage id="layout.Community" />
          </div>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Telegram" />
          </a>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Discord" />
          </a>
          <a className={styles.link} href="">
            <FormattedMessage id="layout.Twitter" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
