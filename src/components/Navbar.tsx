import { DownloadForOffline, Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import Button from "./common/Button";

const linkList = ["home", "about", "skills", "projects", "contact me"];

export default function Navbar() {
  return (
    <div className=" navbar-container py-5 flex items-center justify-around px-4">
      <div className="links-container flex-grow">
        <motion.ul
          className="links capitalize flex dark:text-white justify-center gap-6 font-semibold text-sm md:text-base"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 40 }}
        >
          {linkList.map((e, i) => (
            <motion.li
              className=" hover:text-emerald-900 cursor-pointer  capitalize"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              key={i * 200}
            >
              <a href={`#${e}`}>{e}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="resume-download-button w-fit hidden sm:block"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 40 }}
      >
        <a
          href="https://drive.google.com/file/d/1ITJuKI_VTjVIKwvKQz35i0fJ4-uzmaQz/view?usp=share_link"
          target="_blank"
        >
          <Button text={"resume"} icon={<DownloadForOffline />} />
        </a>
      </motion.div>
    </div>
  );
}
