import {FC, ReactNode} from "react";
import Head from "next/head";
import Header from "../blocks/Header";
import Navigation from "../blocks/Navigation";
import NavigationStore from "../../store/NavigationStore";

interface IMainLayout {
    title: string
    children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({children, title}) => {

    const NavigationStatus = NavigationStore(state => state.status)
    let classListBody = ['min-h-screen']

    if(NavigationStatus){
        classListBody.push('overflow-hidden')
    }

    return (
        <>
            <div className={classListBody.join(' ')}>
                <Head>
                    <title>
                        {title}
                    </title>
                </Head>

                <Header/>
                <Navigation/>

                <div className={'container mx-auto'}>{children}</div>
            </div>
        </>
    )
}

export default MainLayout