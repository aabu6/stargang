"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
   {
      title: "Home",
      href: "/",
      src: "intro.jpg",
   },
   {
      title: "Albums",
      href: "/albums",
      src: "lovelang.jpg",
   },
   {
      title: "About Us",
      href: "/about",
      src: "first.jpg",
   },
   {
      title: "Merch",
      href: "/merch",
      src: "meight.jpg",
   },
   {
      title: "Contact",
      href: "/contact",
      src: "nindra.jpg",
   },
];

export default function Index({
   setIsActive,
}: {
   setIsActive: (active: boolean) => void;
}) {
   const [selectedLink, setSelectedLink] = useState({
      isActive: false,
      index: 0,
   });

   return (
      <motion.div
         variants={height}
         initial="initial"
         animate="enter"
         exit="exit"
         className={styles.nav}
      >
         <div className={styles.wrapper}>
            <div className={styles.container}>
               <Body
                  links={links}
                  selectedLink={selectedLink}
                  setSelectedLink={setSelectedLink}
                  setIsActive={setIsActive}
               />
               {/* <Footer /> */}
            </div>
            <Image
               src={links[selectedLink.index].src || ""}
               isActive={selectedLink.isActive}
            />
         </div>
      </motion.div>
   );
}
