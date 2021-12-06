import type { NextPage } from 'next';
import MyHead from '../components/MyHead/index';
import Sidebar from '../components/Sidebar/index';

const Home: NextPage = () => (
  <>
    <MyHead title='Startech' />
    <Sidebar />
  </>
);

export default Home;
