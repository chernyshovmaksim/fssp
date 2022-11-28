import { FC } from "react";
import styles from "./../../styles/Action.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Action: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    alert(JSON.stringify(data));
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row md:gap-2">
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="name">
                    Имя
                  </label>
                  <input
                    {...register("name", {
                      required: "Поле обязательно для заполнения",
                    })}
                    className={styles.input}
                    placeholder="Иван"
                  />
                  <div>
                    {errors?.name && (
                      <p className="text-xs text-red-500">
                        {errors?.name?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="second-name">
                    Фамилия
                  </label>
                  <input
                    className={styles.input}
                    {...register("lastName", {
                      required: "Поле обязательно для заполнения",
                    })}
                    placeholder="Иванов"
                  />
                  <div>
                    {errors?.lastName && (
                      <p className="text-xs text-red-500">
                        {errors?.lastName?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <label className="flex items-center gap-4">
                  <input type="checkbox" className="original-checkbox hidden" defaultChecked={true} />
                  <div className="fake-checkbox"></div>
                  <span className="text-xs text-gray-600 cursor-pointer">
                    Согласен на обработку персональных данных, с политикой
                    конфиденциальности и с правилами пользования сервисом
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;
