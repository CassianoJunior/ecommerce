import type { NextPage } from 'next';
import MyHead from '../components/MyHead';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const Home: NextPage = () => (
  <>
    <MyHead title='Startech' />
    <Sidebar />
    <Main />
  </>
);

export default Home;
