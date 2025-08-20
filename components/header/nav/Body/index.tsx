import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.css";
import { blur, translate } from "../../anim";

export default function Body({
   links,
   selectedLink,
   setSelectedLink,
   setIsActive,
}: any) {
   const getChars = (word: any) => {
      let chars: any = [];
      word.split("").forEach((char: any, i: number) => {
         chars.push(
            <motion.span
               custom={[i * 0.02, (word.length - i) * 0.01]}
               variants={translate}
               initial="initial"
               animate="enter"
               exit="exit"
               key={char + i}
            >
               {char}
            </motion.span>
         );
      });
      return chars;
   };
   const handleLinkClick = () => {
      setIsActive(false);
   };

   return (
      <div className={styles.body}>
         {links.map((link: any, index: number) => {
            const { title, href } = link;
            return (
               <Link key={`l_${index}`} href={href} onClick={handleLinkClick}>
                  <motion.p
                     onMouseOver={() => {
                        setSelectedLink({ isActive: true, index });
                     }}
                     onMouseLeave={() => {
                        setSelectedLink({ isActive: false, index });
                     }}
                     variants={blur}
                     animate={
                        selectedLink.isActive && selectedLink.index != index
                           ? "open"
                           : "closed"
                     }
                  >
                     {getChars(title)}
                  </motion.p>
               </Link>
            );
         })}
      </div>
   );
}
