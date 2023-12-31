import Layout from "../Layout/Layout";
import Hero from "../components/hero";
import Products from "../components/product";

const Home = () => {
  return (
    <Layout>
      <main className="bg-white overflow-x-hidden">
        <Hero />
        <Products />
      </main>
    </Layout>
  );
};

export default Home;
