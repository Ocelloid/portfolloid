import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "~/app/components/animation";

export default function NavLink({
  data,
  isActive,
  isDisabled,
  setSelectedIndicator,
}: {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  isDisabled: boolean;
  setSelectedIndicator: (href: string) => void;
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="absolute left-[-30px] h-2.5 w-2.5 rounded-full bg-white"
      ></motion.div>
      <Link
        href={href}
        className={isDisabled ? "pointer-events-none cursor-default" : ""}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {title}
      </Link>
    </motion.div>
  );
}
