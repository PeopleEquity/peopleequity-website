import explore1 from '@/assets/images/explore1.png';
import explore2 from '@/assets/images/explore2.png';
import explore3 from '@/assets/images/explore3.png';
import explore4 from '@/assets/images/explore4.png';
import homeBanner from '@/assets/images/home-banner.png';
import last1 from '@/assets/images/last1.png';
import last2 from '@/assets/images/last2.png';
import last3 from '@/assets/images/last3.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FormattedMessage, history } from '@umijs/max';
import { Col, Grid, Row } from 'antd';
import classnames from 'classnames';
import styles from './index.less';
const { useBreakpoint } = Grid;

export default function HomePage() {
  const screens = useBreakpoint();
  function renderBanner() {
    return (
      <div className="p-[.2rem]">
        <Row>
          <Col className={styles.banner} span={24} lg={7}>
            <div className={styles.bannerTitle}>
              <FormattedMessage id="layout.PeopleEquity" />
            </div>
            <div
              className={classnames([
                styles.bannerP,
                {
                  [styles.spaceNowrap]: screens['lg'],
                },
              ])}
            >
              <FormattedMessage id="home.p1" />
            </div>
            <div
              className={classnames([
                styles.bannerP,
                {
                  [styles.spaceNowrap]: screens['lg'],
                },
              ])}
            >
              <FormattedMessage id="home.p2" />
            </div>
            <div
              className={classnames([
                styles.bannerP,
                {
                  [styles.spaceNowrap]: screens['lg'],
                },
              ])}
            >
              <FormattedMessage id="home.p3" />
            </div>
          </Col>
          <Col
            className={classnames([
              styles.bannerImg,
              { ['mt-[.2rem]']: !screens['lg'] },
            ])}
            lg={17}
            span={24}
          >
            <img src={homeBanner} alt="banner" />
          </Col>
        </Row>
      </div>
    );
  }

  function renderWeb() {
    let pane;
    if (screens.lg) {
      pane = (
        <Row gutter={50}>
          <Col span={14}>
            <div className={styles.webText}>
              <pre>
                <FormattedMessage id="home.content" />
              </pre>
            </div>
            <div className={styles.explore}>
              <div className="flex-1">
                <FormattedMessage id="home.explore" />
              </div>
              <ArrowRightOutlined />
            </div>
          </Col>
          <Col span={10} className={styles.right}>
            <div className={styles.rightItem}>
              <img src={explore1} alt="explore1" />
              <div>
                <FormattedMessage id="home.label1" />
              </div>
            </div>
            <div className={styles.rightItem}>
              <img src={explore2} alt="explore2" />
              <div>
                <FormattedMessage id="home.label2" />
              </div>
            </div>
            <div className={styles.rightItem}>
              <img src={explore3} alt="explore3" />
              <div>
                <FormattedMessage id="home.label3" />
              </div>
            </div>
            <div className={styles.rightItem}>
              <img src={explore4} alt="explore4" />
              <div>
                <FormattedMessage id="home.label4" />
              </div>
            </div>
          </Col>
        </Row>
      );
    } else {
      pane = (
        <Row gutter={[5, 20]}>
          <Col span={12} className={styles.rightMobile}>
            <div className={styles.rightItem}>
              <img src={explore1} alt="explore1" />
              <div>
                <FormattedMessage id="home.label1" />
              </div>
            </div>
          </Col>
          <Col span={12} className={styles.rightMobile}>
            <div className={styles.rightItem}>
              <img src={explore2} alt="explore2" />
              <div>
                <FormattedMessage id="home.label2" />
              </div>
            </div>
          </Col>
          <Col span={12} className={styles.rightMobile}>
            <div className={styles.rightItem}>
              <img src={explore3} alt="explore3" />
              <div>
                <FormattedMessage id="home.label3" />
              </div>
            </div>
          </Col>
          <Col span={12} className={styles.rightMobile}>
            <div className={styles.rightItem}>
              <img src={explore4} alt="explore4" />
              <div>
                <FormattedMessage id="home.label4" />
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.webTextMobile}>
              <FormattedMessage id="home.content" />
            </div>
            <div className={styles.explore}>
              <div className="flex-1">
                <FormattedMessage id="home.explore" />
              </div>
              <ArrowRightOutlined />
            </div>
          </Col>
        </Row>
      );
    }
    return (
      <div className="p-[.2rem]">
        <div className={classnames([styles.title, 'text-center'])}>
          <FormattedMessage id="home.t1" />
        </div>
        <div className={styles.pane}>{pane}</div>
      </div>
    );
  }

  function renderInc() {
    return (
      <div className={styles.item}>
        <div className={styles.title}>
          <FormattedMessage id="home.t2" />
          <p>
            <FormattedMessage id="home.msg" />
          </p>
        </div>
        <div className={styles.incStep}>
          <div className={styles.incStepItem}>
            <div
              className={styles.incStepItem1 + ' ' + styles.line + ' pr-[1rem]'}
            >
              <span>01</span>
            </div>
            <div className={styles.incStepItemTitle}>
              <FormattedMessage id="home.step1" />
            </div>
            <div className={styles.incStepItemContent}>
              <FormattedMessage id="home.stepMsg1" />
            </div>
          </div>
          <div className={styles.incStepItem}>
            <div
              className={styles.incStepItem2 + ' ' + styles.line + ' pr-[1rem]'}
            >
              <span>02</span>
            </div>
            <div className={styles.incStepItemTitle}>
              <FormattedMessage id="home.step2" />
            </div>
            <div className={styles.incStepItemContent}>
              <FormattedMessage id="home.stepMsg2" />
            </div>
          </div>
          <div className={styles.incStepItem}>
            <div className={styles.incStepItem3}>
              <span>03</span>
            </div>
            <div className={styles.incStepItemTitle}>
              <FormattedMessage id="home.step3" />
            </div>
            <div className={styles.incStepItemContent}>
              <FormattedMessage id="home.stepMsg3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderBreak() {
    return (
      <div className={styles.item + ' mt-[.6rem]'}>
        <div className={styles.title}>
          <FormattedMessage id="home.t3" />
        </div>
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 24 },
            { xs: 16, sm: 16, md: 24 },
          ]}
          className="mt-[.6rem]"
        >
          <Col span={12}>
            <div className={styles.breakItem}>
              <div className={styles.breakItemTitle}>
                <FormattedMessage id="home.b1" />
              </div>
              <div className={styles.breakItemContent}>
                <FormattedMessage id="home.bt1" />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.breakItem}>
              <div className={styles.breakItemTitle}>
                <FormattedMessage id="home.b2" />
              </div>
              <div className={styles.breakItemContent}>
                <FormattedMessage id="home.bt2" />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.breakItem}>
              <div className={styles.breakItemTitle}>
                <FormattedMessage id="home.b3" />
              </div>
              <div className={styles.breakItemContent}>
                <FormattedMessage id="home.bt3" />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div
              className={styles.breakItemLast}
              onClick={() => {
                history.push('/income');
              }}
            >
              <div className={styles.breakItemTitle}>
                <FormattedMessage id="home.b4" />{' '}
                <span className={styles.rightTop + ' iconfont'}>&#xeb0b;</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  function renderLast() {
    return (
      <div className={styles.item}>
        <div className={styles.title}>
          <FormattedMessage id="home.t4" />
        </div>
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 24 },
            { xs: 16, sm: 16, md: 24 },
          ]}
          className="mt-[.3rem]"
        >
          <Col span={12} lg={8}>
            <div className={classnames([styles.last, styles.last1])}>
              <div className={styles.lastTop}>
                <img src={last1} alt="png" />
                <span>
                  <FormattedMessage id="home.c1" />
                </span>
              </div>
              <div className={styles.lastContet}>
                <pre>
                  <FormattedMessage id="home.cp1" />
                </pre>
              </div>
            </div>
          </Col>
          <Col span={12} lg={8}>
            <div className={classnames([styles.last, styles.last2])}>
              <div className={styles.lastTop}>
                <img src={last2} alt="png" />
                <span>
                  <FormattedMessage id="home.c2" />
                </span>
              </div>
              <div className={styles.lastContet}>
                <FormattedMessage id="home.cp2" />
              </div>
            </div>
          </Col>
          <Col span={12} lg={8}>
            <div className={classnames([styles.last, styles.last3])}>
              <div className={styles.lastTop}>
                <img src={last3} alt="png" />
                <span>
                  <FormattedMessage id="home.c3" />
                </span>
              </div>
              <div className={styles.lastContet}>
                <FormattedMessage id="home.cp3" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className="pb-[.6rem]">
      <div className="ctr pt-[.5rem] pb-[.5rem]">{renderBanner()}</div>
      <div className="ctr">
        {renderWeb()}
        {renderInc()}
        {renderBreak()}
        {renderLast()}
      </div>
    </div>
  );
}
