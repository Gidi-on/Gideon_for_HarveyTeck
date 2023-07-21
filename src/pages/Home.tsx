import Layout from "../Layout/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";

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
