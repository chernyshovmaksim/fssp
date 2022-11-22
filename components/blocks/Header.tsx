import {FC} from "react";
import {VscMenu, VscWarning} from "react-icons/vsc"

const Header:FC = () => {
    return(
        <>
            <header className="bg-emerald-700 py-4 text-white shadow-2xl">
                <div className="container mx-auto flex items-center">
                    <button>
                        <VscMenu className="text-4xl" />
                    </button>

                    <button className="btn ml-auto text-xs uppercase flex items-center">
                        <VscWarning /> &nbsp; Узнать о долге
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header