import { FC } from "react";

const Statistic: FC = () => {
  return (
    <section>
      <div className="container mx-auto py-8 overflow-auto">
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Статистика проверок задолженностей</h3>
        <table className="w-full">
          <tr className="bg-gray-50 border-b-2 border-gray-200 text-sm text-gray-500 text-left">
            <th className="p-4">ФИО ДОЛЖНИКА</th>
            <th className="p-4">РЕГИОН</th>
            <th className="p-4">НОМЕР ПРОИЗВОДСТВА</th>
            <th className="p-4">ДОКУМЕНТ-ОСНОВАНИЕ</th>
            <th className="p-4">ЗАДОЛЖЕННОСТЬ</th>
          </tr>
          <tr className="text-xs text-center">
            <td className="p-4">Кузнецов В.Е.</td>
            <td className="p-4">Пензенская область</td>
            <td className="p-4">67263/20/58041-ИП</td>
            <td className="p-4">Исполнительный лист от 14.09.2020 № ФС № 009215334 ПЕНЗЕНСКИЙ РАЙОННЫЙ СУД</td>
            <td className="p-4">31 727,82 ₽</td>
          </tr>
          <tr className="text-xs text-center">
            <td className="p-4">Кузнецов В.Е.</td>
            <td className="p-4">Пензенская область</td>
            <td className="p-4">67263/20/58041-ИП</td>
            <td className="p-4">Исполнительный лист от 14.09.2020 № ФС № 009215334 ПЕНЗЕНСКИЙ РАЙОННЫЙ СУД</td>
            <td className="p-4">31 727,82 ₽</td>
          </tr>
          <tr className="text-xs text-center">
            <td className="p-4">Кузнецов В.Е.</td>
            <td className="p-4">Пензенская область</td>
            <td className="p-4">67263/20/58041-ИП</td>
            <td className="p-4">Исполнительный лист от 14.09.2020 № ФС № 009215334 ПЕНЗЕНСКИЙ РАЙОННЫЙ СУД</td>
            <td className="p-4">31 727,82 ₽</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default Statistic