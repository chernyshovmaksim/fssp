import { FC } from "react";
import styles from "./../../styles/Action.module.scss";
import Link from "next/link";

const Action: FC = () => {
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
            <form>
              <div className="flex flex-col md:flex-row md:gap-2">
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="name">
                    Имя
                  </label>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="Петр"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="second-name">
                    Фамилия
                  </label>
                  <input
                    className={styles.input}
                    name="second-name"
                    type="text"
                    placeholder="Иванов"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-2 mt-4">
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="day">
                    День рождения
                  </label>
                  <select name="day" id="day" className={styles.input}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="mounth">
                    Месяц рождения
                  </label>
                  <select name="mounth" id="mounth" className={styles.input}>
                    <option value="1">Январь</option>
                    <option value="2">Февраль</option>
                    <option value="3">Март</option>
                    <option value="4">Апрель</option>
                    <option value="5">Май</option>
                    <option value="6">Июнь</option>
                    <option value="7">Июль</option>
                    <option value="8">Август</option>
                    <option value="9">Сентябрь</option>
                    <option value="10">Октябрь</option>
                    <option value="11">Ноябрь</option>
                    <option value="12">Декабрь</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="year">
                    Год рождения
                  </label>
                  <select name="year" id="year" className={styles.input}>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">2003</option>
                    <option value="2003">1983</option>
                    <option value="2003">2003</option>
                    <option value="2003">1982</option>
                    <option value="2003">1981</option>
                    <option value="2003">1980</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col flex-1">
                  <label className={styles.label} htmlFor="phone">
                    Номер телефона
                  </label>
                  <input
                    className={styles.input}
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row flex-1 items-center">
                <div className="flex items-center gap-2 flex-1 hover:cursor-pointer">
                  <input name="politics" type="checkbox" />
                  <label htmlFor="politics" className="text-xs text-gray-500">
                    Согласен на обработку персональных данных, с политикой
                    конфиденциальности и с правилами пользования сервисом
                  </label>
                </div>
                <Link
                  href={"/"}
                  className="btn-primary mt-2"
                >
                  Начать поиск
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;
