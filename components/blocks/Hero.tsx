import {FC} from "react";

import styles from "./../../styles/Hero.module.scss"
import Link from "next/link";
import Image from "next/image";
import Logo from "./../../public/logo.svg"

const Hero: FC = () => {
    return (
        <>
            <section className={styles.heroOne}>
                <div className="container mx-auto">
                    <div className={styles.logo}>
                        <Link href={'/'}><Image src={Logo.src} alt={'ФССП'} width={90} height={100}/></Link>
                        <div>
                            <h3 className='text-2xl font-bold text-gray-700'>Долги по ФССП</h3>
                            <span className="text-xs text-gray-500">Поиск долгов в банке данных судебных приставов</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero