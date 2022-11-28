import MainLayout from "../components/layouts/MainLayout";

export default function PrivacyPolicy (){

  const title:string = 'Политика конфедициальности'

  return (
    <MainLayout title={title}>
        <section>
          <div className="container mx-auto py-8">
            <h1 className="text-2xl">{title}</h1>
          </div>
        </section>
    </MainLayout>
  )
}