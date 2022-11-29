import {FC, useRef} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";

import styles from "./../../styles/Action.module.scss";


interface IFormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthDay: string;
    userAgreement: boolean;
}


const Action: FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm<IFormValues>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });


    return (
        <>
            <section className={styles.action}>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-700 text-center md:text-left">
                            Узнай о своих долгах
                        </h2>
                        <div className="flex flex-col mt-8 gap-y-4 text-emerald-700">
                            <Link href={"/questions/one"}>
                                Cудебные приставы по задолженности не выпускают за границу?
                            </Link>
                            <Link href={"/questions/two"}>
                                Какие возникают ограничения у должников?
                            </Link>
                            <Link href={"/questions/three"}>Исполнительный лист что такое?</Link>
                            <Link href={"/questions/four"}>Срок предъявления исполнительного листа к исполнению</Link>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col md:flex-row md:gap-2">
                                <div className="flex flex-col flex-1">
                                    <label className={styles.label} htmlFor="name">
                                        Имя
                                    </label>
                                    <input
                                        className={styles.input}
                                        placeholder="Иван"
                                        {...register("firstName", {
                                            required: "Имя обязательно для заполнения",
                                        })}
                                    />
                                    <div className="text-xs text-red-600 mt-2">
                                        {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className={styles.label} htmlFor="second-name">
                                        Фамилия
                                    </label>
                                    <input
                                        className={styles.input}
                                        placeholder="Иванов"
                                        {...register("lastName", {
                                            required: "Фамилия обязательна для заполнения",
                                        })}
                                    />
                                    <div className="text-xs text-red-600 mt-2">
                                        {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex flex-col flex-1">
                                    <label className={styles.label} htmlFor="phoneNumber">
                                        Номер телефона
                                    </label>
                                    <input {...register('phoneNumber', {
                                        required: "Номер телефона обязателен для заполнения"
                                    }
                                    )} className={styles.input} placeholder={'+7 (900) 000-00-00'} type={'tel'} />

                                    <div className="text-xs text-red-600 mt-2">
                                        {errors?.lastName && <p>{errors?.phoneNumber?.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex flex-col flex-1">
                                    <label className={styles.label} htmlFor="phoneNumber">
                                        Дата рождения
                                    </label>
                                    <input {...register('birthDay', {
                                            required: "Заполните дату рождения"
                                        }
                                    )} className={styles.input} type={'date'} />

                                    <div className="text-xs text-red-600 mt-2">
                                        {errors?.birthDay && <p>{errors?.birthDay?.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <label className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        className="original-checkbox hidden"
                                        defaultChecked={true}
                                        {...register('userAgreement', {
                                            required: "Необходимо дать разрешение на обработку персональных данных"
                                        })}
                                    />
                                    <div className="fake-checkbox"></div>
                                    <span className="text-xs text-gray-600 cursor-pointer">
                                        <span>Согласен на </span>
                                        <Link href={"/users-agreement"} target={'_blank'}
                                              className="text-emerald-700 underline">
                                          обработку персональных данных
                                        </Link>
                                        <span>, с политикой конфиденциальности и с правилами пользования сервисом</span>
                  </span>
                                </label>

                                <div className="text-xs text-red-600 mt-2">
                                    {errors?.userAgreement && <p>{errors?.userAgreement?.message}</p>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn-primary">
                                    Проверить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Action;
