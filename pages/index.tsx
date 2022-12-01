// import styles from '../styles/Home.module.scss'

import MainLayout from "../components/layouts/MainLayout";
import Action from "../components/blocks/Action";
import Info from "../components/blocks/Info";
import Bases from "../components/blocks/Bases";
import Statistic from "../components/blocks/Statistic";
import Callback from "../components/blocks/Callback";

const Home = async () => {
  const title =
    "Узнать задолженность у судебных приставов: по фамилии, алиментам или номеру постановления";

  return (
    <>
      <MainLayout title={title}>
        <Action />
        <Info />
        <Statistic />
        <Callback />
        <Bases />
      </MainLayout>
    </>
  );
};

export default Home;
