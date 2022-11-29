import {FC} from "react";
import {Controller, useForm} from "react-hook-form";
import Link from "next/link";
import { IMaskInput } from 'react-imask';


import styles from "./../../styles/Action.module.scss";

interface IFormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
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
    const phoneMask: string = "+7 (900) 000-00-00"



    return (
        <>
            <section className={styles.action}>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-700 text-center md:text-left">
                            Узнай о своих долгах
                        </h2>
                        <div className="flex flex-col mt-8 gap-y-4 text-emerald-700">
                            <Link href={"/"}>
                                Как мне узнать, есть ли у меня задолженности?
                            </Link>
                            <Link href={"/"}>
                                Каковы сроки предъявления исполнительных документов к
                                исполнению?
                            </Link>
                            <Link href={"/"}>Внимание, розыск!</Link>
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
                                    <Controller
                                        name={'phoneNumber'}
                                        control={control}
                                        rules={{required: "Укажите номер телефона"}}

                                        render={({field}) => (
                                            <IMaskInput  mask={phoneMask} className={styles.input} placeholder={'+7 (900) 000-00-00'} {...field}/>
                                        )}
                                    />

                                    <div className="text-xs text-red-600 mt-2">
                                        {errors?.lastName && <p>{errors?.phoneNumber?.message}</p>}
                                    </div>


                                </div>
                            </div>

                            <div className="mt-8">
                                <label className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        className="original-checkbox hidden"
                                        defaultChecked={true}
                                    />
                                    <div className="fake-checkbox"></div>
                                    <span className="text-xs text-gray-600 cursor-pointer">
                    Согласен на{" "}
                                        <Link href={"/"} className="text-emerald-700 underline">
                      обработку персональных данных
                    </Link>
                    , с политикой конфиденциальности и с правилами пользования
                    сервисом
                  </span>
                                </label>
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
