import { ComponentType } from 'react';
import UserPage from '../User';
import CourseUser from '../CourseUser';

export interface AdminMenuItem {
  key: string;
  label: string;
  component: ComponentType;
}

export const adminMenus: AdminMenuItem[] = [
  {
    key: 'management',
    label: 'Quản lý người dùng',
    component: UserPage,
  },
  {
    key: 'course',
    label: 'Quản lý khóa học',
    component: CourseUser,
  },
];