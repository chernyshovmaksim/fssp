import {FC} from "react";
import {GrClose} from "react-icons/gr";
import NavigationStore from "../../store/NavigationStore";

const Navigation: FC = () => {
    const statusNavigation = NavigationStore(state => state.status)
    const classListNavigation = ['navigation']

    const changeSNavigation = NavigationStore(state => state.toggleStatus)

    statusNavigation ? classListNavigation.push('navigation-show') : classListNavigation.push('')

    return (
        <>
            <div className={classListNavigation.join(' ')}>
                <div className="flex items-center justify-end px-4 py-2">
                    <GrClose onClick={changeSNavigation} className="text-2xl text-gray-700 hover:cursor-pointer hover:animate-pulse" />
                </div>
            </div>
        </>
    )
}

export default Navigation