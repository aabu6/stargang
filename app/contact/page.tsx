import { Streaming } from "@/components/Streaming";
import React from "react";
import Link from "next/link";
export default function Contact() {
   return (
      <main>
         <section className="text-center pt-[13rem]">
            <p className="mb-[-3rem] uppercase text-black">
               Let Create Something Great Together
            </p>
            <h1 className="font-vanguard  uppercase text-[3rem] lg:text-[9rem] text-black">
               Contact Us
            </h1>
         </section>

         <section className="grid lg:grid-cols-3 gap-3 p-[2rem]">
            <div className="bg-[black] rounded-[2rem] p-[1rem]">
               <h2 className="font-vanguard uppercase text-[3rem] text-[white] ">
                  {" "}
                  For Sponser{" "}
               </h2>
               <p className="font-thin mb-[1rem] text-white font-sans">
                  Are you a brand that wants to vibe with my music and reach my
                  audience? I’m all about partnerships that resonate with my
                  message and style. Let’s create something that speaks to the
                  culture!
               </p>
               <div>
                  {" "}
                  <Link href="/" passHref>
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Click Me
                     </button>
                  </Link>
                  <Link href="/" passHref className="ml-[1rem]">
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Message Me
                     </button>
                  </Link>
               </div>
            </div>
            <div className="bg-[black] rounded-[2rem] p-[1rem]">
               <h2 className="font-vanguard uppercase text-[3rem]  text-[white]">
                  {" "}
                  For Collab{" "}
               </h2>
               <p className="font-thin mb-[1rem] text-white font-sans">
                  Are you an artist, producer, or creative soul looking to team
                  up? I’m always on the lookout for fresh talent and innovative
                  ideas. Whether it’s a track, a music video, or something
                  totally outside the box, hit me up!
               </p>
               <div>
                  {" "}
                  <Link href="/" passHref>
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Click Me
                     </button>
                  </Link>
                  <Link href="/" passHref className="ml-[1rem]">
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Message Me
                     </button>
                  </Link>
               </div>
            </div>
            <div className="bg-[black] rounded-[2rem] p-[1rem]">
               <h2 className="font-vanguard uppercase text-[3rem]  text-[white]">
                  {" "}
                  Event Hosting{" "}
               </h2>
               <p className="font-thin mb-[1rem] text-white font-sans">
                  Planning an event? Whether it’s a concert, festival, or
                  private party, I’d love to bring the energy and vibe to your
                  gathering. Let’s turn up the volume and create unforgettable
                  moments!
               </p>
               <div>
                  {" "}
                  <Link href="/" passHref>
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Click Me
                     </button>
                  </Link>
                  <Link href="/" passHref className="ml-[1rem]">
                     <button className="bg-[white] text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-red-400">
                        Message Me
                     </button>
                  </Link>
               </div>
            </div>
         </section>
         <Streaming />
      </main>
   );
}
