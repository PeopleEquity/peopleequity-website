import appstore from '@/assets/images/appstore.png';
import full from '@/assets/images/full.png';
import googlepaly from '@/assets/images/googleplay.png';
import phoneImg from '@/assets/images/phone.png';
import securityPng from '@/assets/images/security.png';
import { Col, Grid, Row } from 'antd';
import classnames from 'classnames';
import styles from './index.less';

const { useBreakpoint } = Grid;
function Wallet() {
  const screens = useBreakpoint();
  function renderWallet() {
    return (
      <div className={styles.wallet}>
        <Row gutter={[0, 30]}>
          <Col span={24} lg={14} className={styles.left}>
            <div>
              <div
                className={classnames([
                  styles.title,
                  { 'text-center': !screens['lg'] },
                ])}
              >
                EquityWallet
              </div>
              {!screens['lg'] && (
                <img
                  className="m-auto w-[5rem] mt-[.4rem]"
                  src={phoneImg}
                  alt="phone"
                />
              )}
              <div className={styles.content}>
                EquityWallet is your professional gateway to on-chain credit
                monetization powered by new production relations. Developed by
                PeopleEquity and for PeopleEquity ecosystem, EquityWallet
                features user-friendly encryption, ultra-low transaction fees
                and crypto-tailored functions. It integrates credit link, credit
                data, EquitySwap, setting the venue for you to monetize on-chain
                credit and get labor and equity income.
              </div>
              <div className={styles.download}>
                <img src={appstore} alt="appstore" />
                <img src={googlepaly} alt="googlepaly" />
              </div>
            </div>
          </Col>
          {screens['lg'] && (
            <Col span={24} lg={10}>
              <img src={phoneImg} alt="phone" />
            </Col>
          )}
        </Row>
      </div>
    );
  }

  function renderFull() {
    const leftOptions = [
      {
        title: 'Seed Phrase Recovery',
        content: 'Use mnemonic words to recover wallet as necessary',
      },
      {
        title: 'Ciphertext Encryption',
        content:
          'A new, easier-to-use, customizable encryption method for the masses. Ensure asset security even if private key is compromised.',
      },
      {
        title: 'Support Multisig',
        content:
          'Provides users with extra security by requiring multiple unique signatures to authorize and execute a transaction',
      },
    ];

    const rightOptions = [
      {
        title: 'Compatible With Popular Chains',
        content:
          'Support creating wallet accounts on Ethereum, BNB, Solana, Avalanche and other leading L1 blockchains.',
      },
      {
        title: 'Bulk transfer',
        content: 'Transfer tokens to a list of addresses all at once.',
      },
      {
        title: 'Whitelist addresses',
        content:
          'Whitelist the addresses that can transfer tokens to you, preventing spammy or phishing transfers.',
      },
    ];

    return (
      <div className={styles.full}>
        <div className={styles.fullTitle}>Full-fledged Functionality</div>
        <div className={styles.fullPane}>
          <div className={styles.fullPaneLeft}>
            {leftOptions.map((item) => (
              <>
                <div className={styles.fullPaneLeftLine}>
                  <div className={styles.fullPaneLeftTitle}>{item.title}</div>
                  <div className={styles.fullPaneLeftContent}>
                    {item.content}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={styles.fullPaneImg}>
            <img src={full} alt="full" />
          </div>
          <div className={styles.fullPaneRight}>
            {rightOptions.map((item) => (
              <>
                <div className={styles.fullPaneRightLine}>
                  <div className={styles.fullPaneRightTitle}>{item.title}</div>
                  <div className={styles.fullPaneRightContent}>
                    {item.content}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderSecurity() {
    return (
      <Row className={styles.security}>
        <Col span={24} lg={16}>
          <div className={styles.securityLeft}>
            <div
              className={classnames([
                styles.securityTitle,
                { 'text-center': !screens['lg'] },
              ])}
            >
              Enhanced Security
            </div>
            {!screens['lg'] && (
              <div>
                <img
                  className="m-auto mt-[.3rem] w-[5rem]"
                  src={securityPng}
                  alt="security"
                />
              </div>
            )}
            <div className={styles.securityP1}>
              Adopt ciphertext for encryption
            </div>
            <div className={styles.securityP2}>
              Anti-censorship, more secure, customizable encryption
            </div>
            <div className={styles.securityP1}>Audited by Certik</div>
            <div className={styles.securityP2}>Rigorous auditing process</div>
            <div className={styles.securityP1}>Open Source</div>
            <div className={styles.securityP2}>Code made public on GitHub</div>
          </div>
        </Col>
        {screens['lg'] && (
          <Col span={8}>
            <div className={styles.securityRight}>
              <img src={securityPng} alt="security" />
            </div>
          </Col>
        )}
      </Row>
    );
  }

  function renderDownload() {
    return (
      <div className="p-[.2rem]">
        <div className={styles.downloadLast}>
          <div className={styles.downloadLastTitle}>Download EquityWallet</div>
          <div className={styles.downloadLastContent}>
            Get Income on the Move.
          </div>
          <div className={styles.downloadLastStore}>
            <img src={appstore} alt="appstore" />
            <img src={googlepaly} alt="googlepaly" />
          </div>
        </div>
      </div>
    );
  }
  // position: absolute;
  // width: 10px;
  // height: 10px;

  // background: #518CFF;
  // box-shadow: 0px 0px 16px 2px #5274FF;
  return (
    <>
      <div className="ctr">{renderWallet()}</div>
      <div className="ctr">
        {renderFull()}
        {renderSecurity()}
        {renderDownload()}
      </div>
    </>
  );
}

export default Wallet;
