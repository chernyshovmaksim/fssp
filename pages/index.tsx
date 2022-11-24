// import styles from '../styles/Home.module.scss'

import MainLayout from "../components/layouts/MainLayout";
import Fancybox from "./../components/ui/Fancybox";

export default function Home() {
    const title = "Узнать задолженность у судебных приставов: по фамилии, алиментам или номеру постановления"
    return (
        <>
            <MainLayout title={title}>
                <Fancybox>
                    <a className={"btn"}
                        href="https://reg.checkyour.name/fines_96/?phone=79225391269&click_id=1669269877461"
                        data-fancybox
                        data-type="iframe"
                        data-preload="false"
                        data-width="90%"
                        data-height="90%"
                    >
                        Запрос
                    </a>
                </Fancybox>
            </MainLayout>
        </>
    )
}
