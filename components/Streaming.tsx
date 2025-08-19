"use client";
import React from "react";
import {
   SiInstagram,
   SiApplemusic,
   SiFacebook,
   SiYoutubemusic,
   SiTidal,
   SiItunes,
   SiSoundcloud,
   SiSpotify,
   SiAmazonmusic,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
   right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
   left: [NO_CLIP, TOP_RIGHT_CLIP],
   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
   top: [NO_CLIP, TOP_RIGHT_CLIP],
   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
   Icon: IconType;
   href: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href }) => {
   const [scope, animate] = useAnimate();

   const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const box = e.currentTarget.getBoundingClientRect();
      const proximities = [
         { proximity: Math.abs(box.left - e.clientX), side: "left" },
         { proximity: Math.abs(box.right - e.clientX), side: "right" },
         { proximity: Math.abs(box.top - e.clientY), side: "top" },
         { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
      ];
      return proximities.sort((a, b) => a.proximity - b.proximity)[0].side;
   };

   const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const side = getNearestSide(e);
      animate(scope.current, {
         clipPath: ENTRANCE_KEYFRAMES[side as keyof typeof ENTRANCE_KEYFRAMES],
      });
   };

   const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const side = getNearestSide(e);
      animate(scope.current, {
         clipPath: EXIT_KEYFRAMES[side as keyof typeof EXIT_KEYFRAMES],
      });
   };

   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
      >
         <Icon className="text-xl sm:text-3xl lg:text-4xl" />
         <div
            ref={scope}
            style={{ clipPath: BOTTOM_RIGHT_CLIP }}
            className="absolute inset-0 grid place-content-center bg-[black] text-white"
         >
            <Icon className="text-xl sm:text-3xl md:text-4xl" />
         </div>
      </a>
   );
};

const ClipPathLinks: React.FC = () => {
   return (
      <div className="divide-y divide-neutral-900 border border-neutral-900">
         <div className="grid grid-cols-2 divide-x divide-neutral-900">
            <LinkBox Icon={SiYoutubemusic} href="https://music.youtube.com" />
            <LinkBox
               Icon={SiItunes}
               href="https://music.apple.com/np/artist/bluesss/1453021317"
            />
         </div>
         <div className="grid grid-cols-4 divide-x divide-neutral-900">
            <LinkBox
               Icon={SiApplemusic}
               href="https://music.apple.com/np/artist/bluesss/1453021317"
            />
            <LinkBox
               Icon={SiSoundcloud}
               href="https://soundcloud.com/bluesss-music"
            />
            <LinkBox
               Icon={SiInstagram}
               href="https://www.instagram.com/youngbluesss/"
            />
            <LinkBox
               Icon={SiFacebook}
               href="https://www.facebook.com/bluesss01"
            />
         </div>
         <div className="grid grid-cols-3 divide-x divide-neutral-900">
            <LinkBox
               Icon={SiAmazonmusic}
               href="https://www.amazon.com/music/player/artists/B07NPXZWLK/bluesss"
            />
            <LinkBox
               Icon={SiSpotify}
               href="https://open.spotify.com/artist/4Vg08hmIKaUU2iQeJ6LCVv"
            />
            <LinkBox
               Icon={SiTidal}
               href="https://tidal.com/browse/artist/10986075"
            />
         </div>
      </div>
   );
};

export const Streaming: React.FC = () => {
   return (
      <div className="bg-neutral-50 px-4 py-12">
         <div className="mx-auto max-w-7xl">
            <header>
               <h3 className="font-humane uppercase text-[5rem] lg:text-[8rem] text-center text-[black]">
                  Streaming Channels
               </h3>
            </header>

            <ClipPathLinks />
         </div>
      </div>
   );
};
