
import Navigation from "../components/header/navigation"
export const metadata = {
  title: 'NextJS + Loopback App',
  description: 'Dự án Next.js với Loopback Backend',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="vi">
      <body>
        <Navigation />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
