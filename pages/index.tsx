// import styles from '../styles/Home.module.scss'

import MainLayout from "../components/layouts/MainLayout";
import Action from "../components/blocks/Action";
import Info from "../components/blocks/Info";
import Bases from "../components/blocks/Bases";
import Statistic from "../components/blocks/Statistic";
import Callback from "../components/blocks/Callback";

export default function Home() {
    const title =
        "Узнать задолженность у судебных приставов: по фамилии, алиментам или номеру постановления";
    // const link = `https://reg.checkyour.name/fines_96/?phone=79225391269&click_id=1669269877461`
    return (
        <>
            <MainLayout title={title}>
                <Action/>
                <Info/>
                <Statistic/>
                <Callback />
                <Bases/>
            </MainLayout>
        </>
    );
}
