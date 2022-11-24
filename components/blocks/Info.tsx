import { FC } from "react";

import { HiSearch } from "react-icons/hi";
import { FaRegCreditCard, FaBell } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";

const Info: FC = () => {
  return (
    <>
      <section className="info py-32 bg-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-12">
          <div className="flex items-center gap-2">
            <div>
              <FaBell className="text-emerald-700 text-4xl" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-700">
                Уведомления о штрафах и погашениях
              </h4>
              <span className="text-gray-500">
                Мы поможем удостовериться в погашении и сообщим о статусе
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaRegCreditCard className="text-emerald-700 text-4xl" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-700">
                Быстрая оплата онлайн
              </h4>
              <span className="text-gray-500">
                Оплата на счет казначейства картой любого банка в тот же день
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <HiSearch className="text-emerald-700 text-4xl" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-700">
                Система мониторинга новых штрафов
              </h4>
              <span className="text-gray-500">
                Система ищет информацию о новых штрафах
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <SiAdguard className="text-emerald-700 text-4xl" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-700">
                Безопасные платежи
              </h4>
              <span className="text-gray-500">
                Списание и зачисление средств
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
