import { adminMenus } from "./admin/admin-menu-config";

export const featureMap = Object.fromEntries(
  adminMenus.map(item => [item.key, item.component]),
);