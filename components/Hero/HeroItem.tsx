import { motion } from "framer-motion";
function HeroItem() {
  return (
    <motion.div
      className="item self-center flex justify-center items-center text-4xl w-12 h-12  rounded-xl bg-white m-2"
      drag
    ></motion.div>
  );
}

export default HeroItem;
