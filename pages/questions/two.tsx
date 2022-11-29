import MainLayout from "../../components/layouts/MainLayout";
import React from "react";

const Two = () => {
    const title: string = 'Какие возникают ограничения у должников?'
    return (
        <MainLayout title={title}>
            <section>
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl pb-8">{title}</h1>

                    <div id="content">
                        <span>
                            Главное это запрет на любые путешествия вне страны на 3 года. Наложение ареста на все банковские счета и карты. Должник будет обязан погасит задолженность в указанный срок, в ином положении, судебные приставы начнут процедуру конфискации имущества. Для того, чтобы граждане могли самостоятельно узнавать свои задолженности по судебным приставам и в положенный срок их погашать, был создан сайт по проверке долгов онлайн.
                        </span>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};


export default Two;
