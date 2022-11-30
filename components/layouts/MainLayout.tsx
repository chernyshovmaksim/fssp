import { FC, ReactNode, useEffect } from "react";
import Head from "next/head";
import Header from "../blocks/Header";
import Navigation from "../blocks/Navigation";
import NavigationStore from "../../store/NavigationStore";
import Hero from "../blocks/Hero";
import Footer from "../blocks/Footer";

interface IMainLayout {
  title: string;
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children, title }) => {
  const NavigationStatus = NavigationStore((state) => state.status);

  let classListBody = ["min-h-screen"];

  if (NavigationStatus) {
    classListBody.push("overflow-hidden");
  }

  return (
    <>
      <div className={classListBody.join(" ")}>
        <Head>
          <title>{title}</title>
          <meta name="keywords" content="узнать долги, поиск задолженностей" />
          <meta
            name="description"
            content="Поиск задолженностей ФССП РФ по фамилии, номеру ИП и другим документам."
          />
        </Head>

        <Header />

        <Hero />

        <Navigation />

        <div>{children}</div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
