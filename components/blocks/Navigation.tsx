import { FC } from "react";
import { GrClose } from "react-icons/gr";
import NavigationStore from "../../store/NavigationStore";
import Link from "next/link";

const Navigation: FC = () => {
  const statusNavigation = NavigationStore((state) => state.status);
  const classListNavigation = ["navigation"];

  const changeSNavigation = NavigationStore((state) => state.toggleStatus);

  statusNavigation
    ? classListNavigation.push("navigation-show")
    : classListNavigation.push("");

  return (
    <>
      <div className={classListNavigation.join(" ")}>
        <div className="flex items-center justify-end px-4 py-2">
          <GrClose
            onClick={changeSNavigation}
            className="text-2xl text-gray-700 hover:cursor-pointer hover:animate-pulse"
          />
        </div>
        <div className="flex flex-col p-4 gap-4">
          <Link onClick={changeSNavigation} href={"/"}>
            Главная
          </Link>
        </div>
        <div className="p-4 flex flex-col gap-4 border-t border-gray-200">
          <Link
            onClick={changeSNavigation}
            className="underline text-emerald-700 text-xs"
            href={"/privacy-policy"}
          >
            Политика конфиденциальности
          </Link>
          <Link
            onClick={changeSNavigation}
            className="underline text-emerald-700 text-xs"
            href={"/users-agreement"}
          >
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
