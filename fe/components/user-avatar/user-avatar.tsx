'use client';

import { Avatar, Dropdown, MenuProps } from 'antd';
import {
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  LockOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface UserAvatarProps {
  userName?: string;
  avatarSrc?: string;
  onSettings?: () => void;
  onProfile?: () => void;
  onChangePassword?: () => void;
  onSystemSettings?: () => void;
  onLogout?: () => void;
}

export default function UserAvatar({
  userName = 'Admin',
  avatarSrc,
  onSettings,
  onProfile,
  onChangePassword,
  onSystemSettings,
  onLogout,
}: UserAvatarProps) {
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Hồ sơ cá nhân',
      onClick: onProfile,
    },
    {
      key: 'change-password',
      icon: <LockOutlined />,
      label: 'Đổi mật khẩu',
      onClick: onChangePassword,
    },
    {
      type: 'divider',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Cài đặt',
      onClick: onSettings,
    },
    {
      key: 'system-settings',
      icon: <BgColorsOutlined />,
      label: 'Quản lý hệ thống',
      onClick: () => {
        onSystemSettings?.();
        router.push('/admin/management');
      },
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      danger: true,
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
      <Avatar
        src={avatarSrc}
        icon={!avatarSrc && <UserOutlined />}
        style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
        title={userName}
      />
    </Dropdown>
  );
}