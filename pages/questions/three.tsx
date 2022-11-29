import MainLayout from "../../components/layouts/MainLayout";
import React from "react";

const Three = () => {
    const title: string = 'Исполнительный лист что такое?'
    return (
        <MainLayout title={title}>
            <section>
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl pb-8">{title}</h1>

                    <div id="content">
                        <span>
                            Исполнительный лист - исполнительный документ, выдающийся на основании решения суда, для принудительного исполнения судебного решения.
Исполнительный лист подписывается судьей и скрепляется печатью суда, в котором рассматривалось дело.
В исполнительном листе указывается резолютивная часть, наименование и адрес суда, выдавшего ИЛ, номер дела, дата вынесения решения и вступления его в законную силу
                        </span>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Three