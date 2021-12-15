/* eslint-disable object-curly-newline */
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

import Toolbar from '../src/components/Toolbar';
import Main from '../src/components/Main';
import Header from '../src/components/Header';
import commerce from '../src/config/commerce';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await commerce.products.list();

  const products = data.filter(({ active }) => active);

  return {
    props: { products },
    revalidate: 60,
  };
};

const Home: NextPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Header />
    <Main products={products} />
    <Toolbar />
  </>
);
export default Home;
