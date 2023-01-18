import { DownloadForOffline, Menu as MenuIcon } from "@mui/icons-material";
import Button from "./common/Button";

export default function Navbar() {
  return (
    <div className=" navbar-container py-5 flex items-center justify-around px-4">
      <div className="links-container flex-grow">
        <ul className="links capitalize flex dark:text-white justify-center gap-6 font-semibold text-sm md:text-base">
          <li className=" hover:text-emerald-900 cursor-pointer link-home">
            Home
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-about">
            About
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-skills">
            Skills
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-projects">
            projects
          </li>
        </ul>
      </div>
      <div className="resume-download-button w-fit hidden sm:block">
        <Button text={"resume"} icon={<DownloadForOffline />} />
      </div>
    </div>
  );
}
