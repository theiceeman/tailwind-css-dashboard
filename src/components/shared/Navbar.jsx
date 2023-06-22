import { FcSmartphoneTablet } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ";

const Navbar = () => {
  return (
    <>
      <div className="flex-1 py-8 flex flex-col gap-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700 cursor-pointer">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <HiLogout />
          </span>
          Logout
        </div>
      </div>
    </>
  );
};

export default Navbar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
