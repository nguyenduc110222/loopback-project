'use client';

import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, FileTextOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserAvatar from '../user-avatar/user-avatar';
import styles from './navigation.module.scss';

const Navigation = () => {
  const pathname = usePathname();

  // Xác định menu item nào đang active
  const getSelectedKey = () => {
    if (pathname === '/') return '1';
    if (pathname === '/about') return '2';
    if (pathname === '/blogs') return '3';
    return '1';
  };

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link href="/">Trang Chủ</Link>,
    },
    {
      key: '2',
      icon: <InfoCircleOutlined />,
      label: <Link href="/about">Giới Thiệu</Link>,
    },
    {
      key: '3',
      icon: <FileTextOutlined />,
      label: <Link href="/blogs">Blog</Link>,
    },
  ];

  return (
    <Layout.Header className={styles.header}>
      <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className={styles.logo}>ZEEEE</div>

        <div >
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[getSelectedKey()]}
            items={menuItems}
            className={styles.menu}
          />
        </div>

        <div>
          <div className={styles.avatarWrapper}>
            <UserAvatar />
          </div>
        </div>
      </div>
    </Layout.Header >
  );
};

export default Navigation;