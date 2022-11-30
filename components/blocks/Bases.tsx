import { FC } from "react";

const Bases: FC = () => {
  return (
    <>
      <section className="bases py-8">
        <div className="container mx-auto">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">
            Сервисы для граждан РФ
          </h3>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-xl text-gray-400 pb-4">
                Проверка задолженностей по базе ФССП
              </h3>
              <p className="text-xs text-gray-600">
                Бесплатная онлайн проверка задолженностей по судебным приставам
                с возможностью погасить долг онлайн прямо на сайте
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-400 pb-4">
                Проверка запрета на выезд за границу
              </h3>
              <p className="text-xs text-gray-600">
                Инструкция, как проверить наличие запрета на выезд за границу и
                в каких случаях пристав может наложить арест или запрет
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-400 pb-4">
                Реестр лиц, находящихся в розыске ФССП
              </h3>
              <p className="text-xs text-gray-600">
                База физических лиц, находящихся в федеральном розыске Службой
                Судебных Приставов
              </p>
            </div>
            <div>
              <h3 className="text-xl text-gray-400 pb-4">
                Проверка налоговой задолженности по ИНН
              </h3>
              <p className="text-xs text-gray-600">
                Бесплатная онлайн проверка задолженностей по судебным приставам
                с возможностью погасить долг онлайн прямо на сайте
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bases;
