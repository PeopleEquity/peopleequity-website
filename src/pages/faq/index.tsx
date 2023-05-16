import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './index.less';

const Faq: React.FC = () => {
  return (
    <div className="ctr">
      <div className={styles.faq}>
        <div className={styles.title}>Frequently asked questions</div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <PlusOutlined />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <PlusOutlined />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <PlusOutlined />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <PlusOutlined />
            </span>
          </div>
        </div>
        <div className={styles.item + ' ' + styles.active}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <MinusOutlined />
            </span>
          </div>
          <div className={styles.itemContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>
            <span>What is Fabrx Web Design System?</span>
            <span>
              <PlusOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
