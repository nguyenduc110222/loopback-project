import { Layout } from 'antd';
import AdminSidebar from '../../components/admin/admin-management';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSidebar />

      <Layout>
        <div style={{ padding: 24 }}>
          {children}
        </div>
      </Layout>
    </Layout>
  );
}