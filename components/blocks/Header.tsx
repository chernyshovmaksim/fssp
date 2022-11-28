import { FC } from "react";
import { VscWarning } from "react-icons/vsc";
import NavigationStore from "../../store/NavigationStore";
import { CgMenuGridR } from "react-icons/cg";

const Header: FC = () => {
  const changeStatusNavigation = NavigationStore((state) => state.toggleStatus);
  return (
    <>
      <header className="bg-emerald-700 py-4 text-white shadow">
        <div className="container mx-auto flex items-center">
          <button>
            <CgMenuGridR
              onClick={changeStatusNavigation}
              className="text-4xl"
            />
          </button>

          <button className="btn ml-auto text-xs uppercase flex items-center">
            <VscWarning /> &nbsp; Узнать о долге
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;