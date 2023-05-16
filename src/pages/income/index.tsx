import incomePng from '@/assets/images/income.png';
import { Col, Grid, Row } from 'antd';
import styles from './index.less';

const { useBreakpoint } = Grid;

function Income() {
  const screens = useBreakpoint();

  function renderTop() {
    return (
      <div className={styles.top}>
        <Row>
          <Col span={24} lg={12}>
            <div className={styles.title}>Income</div>
            {!screens['lg'] && (
              <img className="mb-[.2rem]" src={incomePng} alt="income" />
            )}
            <div className={styles.content}>
              In PeopleEquity’s new production relations, users gets the wealth
              they create, particularly the equity income that should belong to
              contributors. Users & influencers first need to establish on-chain
              credit link through two-way transfer, creating a credit network
              for an enterprise’s token. VIIP is used to track and quantify
              contribution, while VSDP distributes income. In the credit
              network, when affiliated downlines trade token at EquitySwap,
              uplines get labor and equity income.
            </div>
          </Col>
          {screens['lg'] && (
            <Col span={10} offset={2}>
              <img src={incomePng} alt="income" />
            </Col>
          )}
        </Row>
      </div>
    );
  }
  function renderContent() {
    return (
      <>
        <div className={styles.subTitle + ' mt-[1rem]'}>Income Breakdown</div>
        <div className={styles.table}>
          <Row gutter={[0, 20]}>
            <Col span={24} md={{ span: 11 }}>
              <div className={styles.tableTop}>Labor Income</div>
              <div className={styles.tableP}>
                When affiliated downlines buy tokens, earnings for uplines:
              </div>
              <div className={styles.tableGird}>
                <div></div>
                <div>Internal Incentive </div>
                <div>EquitySwap Fee Rebate </div>
                <div>Direct upline</div>
                <div>80% * (0%~2%)</div>
                <div>0.04%</div>
                <div>Level 2 upline</div>
                <div>20% * (0%~2%)</div>
                <div>0.01%</div>
              </div>
            </Col>
            <Col span={24} md={{ span: 11, offset: 2 }}>
              <div className={styles.tableTop}>Equity Income</div>
              <div className={styles.tableP}>
                When affiliated downlines sell tokens, earnings for uplines:
              </div>
              <div className={styles.tableGird}>
                <div></div>
                <div>Internal Incentive </div>
                <div>EquitySwap Fee Rebate </div>
                <div>Direct upline</div>
                <div>80% * (0%~2%)</div>
                <div>0.04%</div>
                <div>Level 2 upline</div>
                <div>20% * (0%~2%)</div>
                <div>0.01%</div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={styles.subTitle + ' mt-[1rem]'}>Income Explanation</div>
        <Row className="mt-[.3rem]" gutter={[0, 20]}>
          <Col span={24} lg={11}>
            <div className={styles.wTitle}>Internal Incentive</div>
            <div>
              Internal incentive derives from the internal fees charged on a
              transaction. In most cases, internal fee ratio is set between 0%
              to 2% by token issuer(enterprise) at EquitySwap, and it’s
              subtracted along with EquitySwap fees when a trade is executed.
              Note that Internal fee ratio may be variable according to metrics
              customized by token issuer. Of the internal fees, 60% is allocated
              to credit uplines and the remaining 40% is designated for token
              issuer to cover costs in operation, marketing, community growth.
              Addresses that have connected to an upline address through two-way
              transfer are able to get 50% off internal fees.
            </div>
          </Col>
          <Col span={24} lg={{ offset: 2, span: 11 }}>
            <div className={styles.wTitle}>EquitySwap Fees</div>
            <div>
              EquitySwap charges 0.3% fees on every trade. A total of 0.1% fees
              is rebated to direct upline and level 2 upline when affiliated
              downlines trade.
            </div>
            <div className={styles.wTitle + ' mt-[.2rem]'}>
              Refunding Policy
            </div>
            <div>
              If there is no direct upline or level 2 upline for an address,
              then the Internal Incentive and Fee Rebate will be returned to the
              token issuer and EquitySwap, respectively.
            </div>
          </Col>
        </Row>

        <div className={styles.last}>
          <div className={styles.subTitle + ' text-center'}>
            Income Highlights
          </div>
          <Row
            gutter={[
              { xs: 10, sm: 20, lg: 40 },
              { xs: 10, sm: 20, lg: 40 },
            ]}
            className="mt-[.3rem]"
          >
            <Col span={24} sm={12} md={8}>
              <div>
                <div className={styles.lastTop1}></div>
                <div className={styles.lastTitle}>Paid in USDT</div>
                <div className={styles.lastContent}>
                  Labor income and Equity income are paid in stablecoins. USDC
                  is the payment method at the moment.
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div>
                <div className={styles.lastTop2}></div>
                <div className={styles.lastTitle}>Deposited in real-time</div>
                <div className={styles.lastContent}>
                  Smart contract automatically credits income to upline’s
                  EquityWallet account and instantly after affiliated downlines
                  trade.
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} md={8}>
              <div>
                <div className={styles.lastTop3}></div>
                <div className={styles.lastTitle}>No uplimit</div>
                <div className={styles.lastContent}>
                  By building and monetizing on-chain credit, users &
                  influencers can get risk-free income without limit.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="ctr">{renderTop()}</div>
      <div className="ctr pl-[.2rem] pr-[.2rem]">{renderContent()}</div>
    </>
  );
}

export default Income;
