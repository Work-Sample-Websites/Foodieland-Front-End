import { icons } from "../../../services/utils/icons";
import "./index.css";

const PanelSettingsNavbar = ({ activePageHandler, activePage }) => {
  return (
    <>
      <nav className="border-b-2 border-slate-300 py-3">
        <ul className="flex justify-start">
          <li
            className={`nav__links ${
              activePage === "account" && "active"
            }  mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => activePageHandler("account")}
          >
            <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
            <p className="text-sm sm:text-base">ACCOUNT</p>
          </li>
          <li
            className={`nav__links ${
              activePage === "security" && "active"
            }  mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => activePageHandler("security")}
          >
            <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
            <p className="text-sm sm:text-base">SECURITY</p>
          </li>
          <li
            className={`nav__links ${
              activePage === "info" && "active"
            } mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => activePageHandler("info")}
          >
            <span className="mr-2 fill-slate-800">{icons.info()}</span>{" "}
            <p className="text-sm sm:text-base">INFO</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PanelSettingsNavbar;
