import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-4">
      <motion.div variants={itemVariants}>
        <Link hidden href="" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            hidden
            variant="secondary"
            className="text-purple-50 transition-all duration-150 ease-linear md:hover:text-purple-200">
            {/* <SiNotion className="md:mr-1.5" /> */}
            <span className="hidden md:inline"></span>
          </Button>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href="https://www.youtube.com/@siebedg" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="text-purple-50 transition-all duration-150 ease-linear md:hover:text-purple-200">
            <FaYoutube className="md:mr-1.5" />
            <span className="hidden md:inline">YouTube Channel</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
