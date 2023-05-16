import logo from '@/assets/images/logo.png';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Grid, Space } from 'antd';
import { List, Popup } from 'antd-mobile';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { FormattedMessage, Link, Outlet, SelectLang, useLocation } from 'umi';
import Footer from './footer';
import styles from './index.less';

const { useBreakpoint } = Grid;
//  lg 992 以下认为是移动端屏幕

export default function Layout() {
  const { pathname } = useLocation();
  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const items: MenuProps['items'] = [
    {
      label: (
        <Link
          to="/income"
          className={classnames({ [styles.active]: pathname === '/income' })}
        >
          Income
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link
          to="/team"
          className={classnames({ [styles.active]: pathname === '/team' })}
        >
          Team
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link
          to="/faq"
          className={classnames({ [styles.active]: pathname === '/faq' })}
        >
          FAQ
        </Link>
      ),
      key: '0',
    },
  ];

  function renderHeader() {
    if (screens['lg']) {
      return (
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span className="ml-[10px]">
              <Link to="/">
                <FormattedMessage id="layout.PeopleEquity" />
              </Link>
            </span>
          </div>
          <ul className={styles.menu}>
            <li className={classnames({ [styles.active]: pathname === '/' })}>
              <a href="https://equityswap.club/">
                <FormattedMessage id="layout.EquitySwap" />
              </a>              
            </li>
            <li>
              <a href="https://equityswap.club/dcs">
                <FormattedMessage id="layout.CreditData" />
              </a>
            </li>
            <li
              className={classnames({
                [styles.active]: pathname === '/wallet',
              })}
            >
              <Link to="/wallet">
                <FormattedMessage id="layout.Wallet" />
              </Link>
            </li>
            <li>
              <Dropdown menu={{ items }} overlayClassName={styles.overlay}>
                <Space className="text-[.2rem]">
                  <FormattedMessage id="layout.Explore" />
                  <DownOutlined />
                </Space>
              </Dropdown>
            </li>
          </ul>
          <div className={styles.lang}>
            {/* <a onClick={}>English</a> */}
            <SelectLang icon="🌍" />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.mHeader}>
          <div className={styles.mLogo}>
            <img src={logo} alt="logo" />
            <span className="ml-[10px]">
              <FormattedMessage id="layout.PeopleEquity" />
            </span>
          </div>
          <div className={styles.menuIcon}>
            <MenuOutlined
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>

          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
            position="right"
            bodyStyle={{
              width: '60vw',
              background: '#000',
            }}
          >
            <div style={{ color: '#fff' }}>
              <List className={styles.menuList}>
                <List.Item>
                  <Link
                    to="/"
                    className={classnames([
                      styles.menuItem,
                      {
                        [styles.menuItemActive]: pathname === '/',
                      },
                    ])}
                  >
                    <FormattedMessage id="layout.EquitySwap" />
                  </Link>
                </List.Item>
                <List.Item>
                  <a
                    href="https://equityswap.club"
                    className={classnames([styles.menuItem])}
                  >
                    <FormattedMessage id="layout.CreditData" />
                  </a>
                </List.Item>
                <List.Item>
                  <Link
                    to="/wallet"
                    className={classnames([
                      styles.menuItem,
                      {
                        [styles.menuItemActive]: pathname === '/wallet',
                      },
                    ])}
                  >
                    <FormattedMessage id="layout.Wallet" />
                  </Link>
                </List.Item>
              </List>

              <List
                className={styles.menuList}
                header={<FormattedMessage id="layout.Explore" />}
              >
                <List.Item>
                  <Link
                    to="/income"
                    className={classnames([
                      styles.menuItem,
                      {
                        [styles.menuItemActive]: pathname === '/income',
                      },
                    ])}
                  >
                    <FormattedMessage id="layout.Income" />
                  </Link>
                </List.Item>
                <List.Item>
                  <Link
                    to="/team"
                    className={classnames([
                      styles.menuItem,
                      {
                        [styles.menuItemActive]: pathname === '/team',
                      },
                    ])}
                  >
                    <FormattedMessage id="layout.Team" />
                  </Link>
                </List.Item>
                <List.Item>
                  <Link
                    to="/faq"
                    className={classnames([
                      styles.menuItem,
                      {
                        [styles.menuItemActive]: pathname === '/faq',
                      },
                    ])}
                  >
                    <FormattedMessage id="layout.FAQ" />
                  </Link>
                </List.Item>
              </List>
              <SelectLang icon="🌍" />
            </div>
          </Popup>
        </div>
      );
    }
  }
  return (
    <div className={styles.layout}>
      <div className="ctr">{renderHeader()}</div>
      <Outlet />
      <Footer />
    </div>
  );
}
