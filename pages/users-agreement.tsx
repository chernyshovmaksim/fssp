import MainLayout from "../components/layouts/MainLayout";

export default function UsersAgreement() {

    const title: string = 'Пользовательское соглашение'

    return (

        <MainLayout title={title}>
            <section className="agreement">
               <div className="container mx-auto py-8">
                   <h1 className="text-2xl py-4">{title}</h1>
                   <div id="content">
                       Сюда вставлять контент
                   </div>
               </div>
            </section>
        </MainLayout>
)
}