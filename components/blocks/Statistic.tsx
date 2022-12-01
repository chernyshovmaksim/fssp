import { FC } from "react";

const Statistic: FC = () => {
  return (
    <section>
      <div className="container mx-auto py-8 overflow-auto">
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">
          Статистика проверок задолженностей
        </h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200 text-sm text-gray-500 text-left">
              <th className="p-4">ФИО ДОЛЖНИКА</th>
              <th className="p-4">РЕГИОН</th>
              <th className="p-4">НОМЕР ПРОИЗВОДСТВА</th>
              <th className="p-4">ДОКУМЕНТ-ОСНОВАНИЕ</th>
              <th className="p-4">ЗАДОЛЖЕННОСТЬ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs text-left">
              <td className="p-4">Кузнецов В.Е.</td>
              <td className="p-4">Пензенская область</td>
              <td className="p-4">67263/20/58041-ИП</td>
              <td className="p-4">
                Исполнительный лист от 29.11.2022 № ФС № 009215334 ПЕНЗЕНСКИЙ
                РАЙОННЫЙ СУД
              </td>
              <td className="p-4">31 727,82 ₽</td>
            </tr>
            <tr className="text-xs text-left">
              <td className="p-4">Шарафутдинов Р.Р.</td>
              <td className="p-4">Республика Татарстан</td>
              <td className="p-4">155151/22/16007-ИП</td>
              <td className="p-4">
                Исполнительный лист от 28.11.2022 № ФС 038670960 ПРИВОЛЖСКИЙ
                РАЙОННЫЙ СУД Г. КАЗАНИ 7714704125
              </td>
              <td className="p-4">422 424,56 ₽</td>
            </tr>
            <tr className="text-xs text-left">
              <td className="p-4">Исаева А.В.</td>
              <td className="p-4">Костромская область</td>
              <td className="p-4">96173/22/44003-ИП</td>
              <td className="p-4">
                Судебный приказ от 30.11.2022 № 2-1146/2022 Постановление о
                взыскании исполнительского сбора СУДЕБНЫЙ УЧАСТОК № 4
                СВЕРДЛОВСКОГО СУДЕБНОГО РАЙОНА ГОРОДА КОСТРОМЫ 7606053324
              </td>
              <td className="p-4">14 689,90 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Statistic;
