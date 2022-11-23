import {FC, ReactNode} from "react";
import Head from "next/head";
import Header from "../blocks/Header";
import Navigation from "../blocks/Navigation";

interface IMainLayout{
    title: string
    children: ReactNode
}

const MainLayout:FC<IMainLayout> = ({children, title}) => {

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>

            <Header />
            <Navigation />

            <div className={'container mx-auto'}>{children}</div>
        </>
    )
}

export default MainLayout