import Head from 'next/head';
import Header from '../components/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;