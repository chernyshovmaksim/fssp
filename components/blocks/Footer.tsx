import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <footer className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <div>
            <h5 className="text-xl font-bold text-center">
              Сервис проверки <br />
              задолженностей
            </h5>
            <span className="text-gray-500 text-xs text-center block">
              Информационый сайт
            </span>
          </div>
          <div className="mt-4 flex flex-col items-center text-xs">
            <Link href={"/users-agreement"}>Обработка персональных данных</Link>
            <Link href={"/privacy-policy"}>Политика конфиденциальности</Link>
          </div>
          <div className="flex flex-col items-center text-xs text-gray-500 mt-8">
            <div>© 2022 Все права защищены.</div>
            <div>Контактный телефон: +7 (910) 444-77-66</div>
            <div>
              E-mail:{" "}
              <Link href="mailto://fssp-official@main.ru">
                fssp-official@main.ru
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
