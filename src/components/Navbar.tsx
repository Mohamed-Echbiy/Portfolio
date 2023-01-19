import { DownloadForOffline, Menu as MenuIcon } from "@mui/icons-material";
import Button from "./common/Button";

export default function Navbar() {
  return (
    <div className=" navbar-container py-5 flex items-center justify-around px-4">
      <div className="links-container flex-grow">
        <ul className="links capitalize flex dark:text-white justify-center gap-6 font-semibold text-sm md:text-base">
          <li className=" hover:text-emerald-900 cursor-pointer link-home">
            <a href="#home">Home</a>
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-about">
            <a href="#about">About</a>
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-skills">
            <a href="#skills">Skills</a>
          </li>
          <li className=" hover:text-emerald-900 cursor-pointer link-projects">
            <a href="#projects">projects</a>
          </li>
          <li className="link-contact-me hover:text-emerald-900 cursor-pointer">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="resume-download-button w-fit hidden sm:block">
        <a
          href="https://drive.google.com/file/d/1ITJuKI_VTjVIKwvKQz35i0fJ4-uzmaQz/view?usp=share_link"
          target="_blank"
        >
          <Button text={"resume"} icon={<DownloadForOffline />} />
        </a>
      </div>
    </div>
  );
}
