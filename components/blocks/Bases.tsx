import { FC } from "react";
import Image from "next/image";

import gibddLogo from "./../../public/images/gibdd.svg";
import fnsLogo from "./../../public/images/fns.svg";
import fsspLogo from "./../../public/images/fssp.svg";

const Bases: FC = () => {
  return (
    <>
      <section className="bases py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Доступные базы для поиска и мониторинга
          </h3>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-4">
            <div className="flex items-center gap-4 border rounded p-4 shadow">
              <Image
                src={gibddLogo.src}
                width={60}
                height={60}
                alt={
                  "Государственная инспекция безопасности дорожного движения"
                }
              />
              <div className="flex flex-col flex-1">
                <h4 className="text-xl font-bold text-gray-700">
                  Государственная инспекция безопасности дорожного движения
                </h4>
                <span className=" text-xs text-gray-500">
                  Поиск штрафов по стс и гос номерам
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border rounded p-4 shadow">
              <Image
                src={fnsLogo.src}
                width={60}
                height={60}
                alt={"Федеральная налоговая служба"}
              />

              <div className="flex flex-col flex-1">
                <h4 className="text-xl font-bold text-gray-700">
                  Федеральная налоговая служба
                </h4>
                <span className="text-xs text-gray-500">
                  Предоставление сведений из ЕГРЮЛ/ЕГРИП
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border rounded p-4 shadow">
                <Image
                  src={fsspLogo.src}
                  width={60}
                  height={60}
                  alt={"Федеральная служба судебных приставов"}
                />
              <div className="flex flex-col flex-1">
                <h4 className="text-xl font-bold text-gray-700">
                  Федеральная служба судебных приставов
                </h4>
                <span className="text-xs text-gray-500">
                  Поиск по ФИО и номерам исполнительных производств
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bases;
