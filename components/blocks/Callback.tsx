import {FC} from "react";
import cn from 'classnames'

import styles from './../../styles/Callback.module.scss'

const Callback: FC = () => {
    return (
        <>
            <section className={styles.callback}>
                <div className={cn('container', styles.callback__container)}>
                    <div className={cn(styles.block, styles.blue)}>
                        <h3 className={styles.header}>Интернет приемная ФССП России</h3>
                        <p className={styles.text}>
                            Интернет-приемная является способом подачи обращения в форме электронного документа в
                            соответствии с законом от 02.05.2006 № 59-ФЗ «О порядке рассмотрения обращений граждан
                            Российской Федерации».
                        </p>
                    </div>
                    <div className={cn(styles.block, styles.pink)}>
                        <h3 className={styles.header}>Обратная связь для сообщение о коррупции</h3>
                        <p className={styles.text}>
                            Перед отправкой обращения рекомендуем ознакомиться с информацие о функционировании, целях и
                            правил приема обращений, утвержденным приказов от 30.11.2020 № 807 ФССП России и ФЗ 59 от
                            02.05.2006.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Callback