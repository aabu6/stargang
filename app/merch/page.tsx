"use client";
import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

const MerchWaitlistPage = () => {
   const [email, setEmail] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async () => {
      if (!email) return;

      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
   };

   return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
         <div className="max-w-md w-full text-center">
            {/* Logo/Brand */}

            {/* Coming Soon */}
            <div className="mb-12">
               <h2 className="text-4xl md:text-7xl font-light mb-6 text-black">
                  Coming Soon
               </h2>
               <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  Our collection is in final preparation. Join the waitlist to
                  be notified when we launch.
               </p>
            </div>

            {/* Waitlist Form */}
            <div className="mb-8">
               {!isSubmitted ? (
                  <div className="space-y-4">
                     <div className="relative">
                        <input
                           type="email"
                           placeholder="Enter your email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-sm bg-white"
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>

                     <button
                        onClick={handleSubmit}
                        disabled={isLoading || !email}
                        className="w-full py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                     >
                        {isLoading ? (
                           <div className="flex items-center justify-center">
                              <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                              JOINING...
                           </div>
                        ) : (
                           "JOIN WAITLIST"
                        )}
                     </button>
                  </div>
               ) : (
                  <div className="border border-gray-300 p-6">
                     <CheckCircle className="w-6 h-6 text-black mx-auto mb-3" />
                     <p className="text-sm text-gray-600">
                        Thank you. We will notify you when we launch.
                     </p>
                  </div>
               )}
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400">© 2025 All rights reserved</p>
         </div>
      </div>
   );
};

export default MerchWaitlistPage;
