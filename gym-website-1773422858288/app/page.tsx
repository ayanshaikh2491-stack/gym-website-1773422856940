import Head from 'next/head';
import Layout from '../layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Memberships from '../components/Memberships';
import Contact from '../components/Contact';

function Page() {
  return (
    <Layout>
      <Head>
        <title>Gym Website</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Memberships />
      <Contact />
    </Layout>
  );
}

export default Page;