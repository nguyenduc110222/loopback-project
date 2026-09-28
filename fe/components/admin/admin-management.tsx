'use client';

import { Layout, Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { adminMenus } from './admin-menu-config';

const { Sider } = Layout;

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sider width={240}>
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        ADMIN
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={adminMenus.map(item => ({
          key: `/admin/${item.key}`,
          label: item.label,
        }))}
        onClick={({ key }: { key: string }) => router.push(key)}
      />
    </Sider>
  );
}