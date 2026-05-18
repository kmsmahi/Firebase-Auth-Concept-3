import { Compass } from 'lucide';
import React from 'react';
import { useNavigate } from 'react-router';
// import { Compass } from 'lucide-react'; 
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] font-sans px-4">
      <div className="relative max-w-md w-full backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-10 text-center shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:pointer-events-none">
        
      
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#48CAE4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />

        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#E0E1DD] mb-6 shadow-inner animate-pulse">
          <Compass size={28} className="text-[#90E0EF]" />
        </div>

       
        <h1 className="text-7xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F8F9FA] via-[#E9ECEF] to-[#ADB5BD] mb-2">
          404
        </h1>
        <h2 className="text-xl font-medium text-[#E0E1DD] tracking-wide mb-3">
          Lost in the Grid
        </h2>
        
     
        <p className="text-sm text-[#8D99AE] leading-relaxed mb-8 max-w-sm mx-auto">
          The route you are trying to access doesn't exist or has been shifted permanently. Let's get you back on track.
        </p>

       
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-white/[0.08] text-sm font-medium text-[#E0E1DD] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-200 shadow-sm"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-sm font-medium text-white hover:from-[#0096C7] hover:to-[#03045E] shadow-lg shadow-[#0077B6]/20 transition-all duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;