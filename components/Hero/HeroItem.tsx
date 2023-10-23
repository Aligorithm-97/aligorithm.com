import { motion } from "framer-motion";
import { MutableRefObject } from "react";
interface proptype {
  icon: JSX.Element;
  constraintsRef: MutableRefObject<null>;
}
function HeroItem(props: proptype) {
  return (
    <motion.div
      className="item self-center flex justify-center items-center text-4xl w-12 h-12 rounded-xl bg-white lg:m-2 m-0"
      drag
      dragConstraints={props?.constraintsRef}
    >
      {props.icon}
    </motion.div>
  );
}

export default HeroItem;
