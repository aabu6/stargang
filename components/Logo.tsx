import { forwardRef } from "react";
const Logo = forwardRef((props: any, ref: any) => {
   return (
      <svg
         ref={ref}
         xmlns="http://www.w3.org/2000/svg"
         width="160"
         height="160"
         viewBox="0 0 100 100"
         fill="none"
         stroke="#e3e4d8"
         strokeWidth="1"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M50 5 L61 35 L95 35 L68 57 L79 87 L50 65 L21 87 L32 57 L5 35 L39 35 Z" />
      </svg>
   );
});

export default Logo;
