import React from 'react';

interface LogoShieldProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const LogoShield: React.FC<LogoShieldProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const textSizeClasses = {
    sm: 'text-sm font-bold',
    md: 'text-base font-extrabold',
    lg: 'text-xl font-black',
    xl: 'text-2xl font-black'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
        {/* SVG Recreation of Reforço Escolar Borja Castillo Logo Badge */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle cx="100" cy="100" r="96" fill="#1B1145" stroke="#F5B718" strokeWidth="6" />
          <circle cx="100" cy="100" r="88" stroke="#F5B718" strokeWidth="2" strokeDasharray="4 3" />

          {/* Gold Decorative Stars on Left & Right Ring */}
          <polygon points="25,100 28,92 36,92 30,97 32,105 25,100" fill="#F5B718" />
          <polygon points="175,100 172,92 164,92 170,97 168,105 175,100" fill="#F5B718" />

          {/* Curved Text Path */}
          <path id="textArcTop" d="M 28 100 A 72 72 0 1 1 172 100" fill="none" />
          <path id="textArcBottom" d="M 172 100 A 72 72 0 0 1 28 100" fill="none" />

          <text fill="#FFFFFF" fontSize="13" fontWeight="900" letterSpacing="2.5" textAnchor="middle">
            <textPath href="#textArcTop" startOffset="50%">
              REFORÇO ESCOLAR
            </textPath>
          </text>

          <text fill="#F5B718" fontSize="13" fontWeight="900" letterSpacing="2.5" textAnchor="middle">
            <textPath href="#textArcBottom" startOffset="50%">
              BORJA CASTILLO
            </textPath>
          </text>

          {/* Inner White Badge Background */}
          <circle cx="100" cy="100" r="62" fill="#FFFFFF" stroke="#F5B718" strokeWidth="3" />

          {/* Shield Outline inside */}
          <path
            d="M 100 48 L 132 58 C 132 100 115 130 100 142 C 85 130 68 100 68 58 Z"
            fill="#1B1145"
            stroke="#F5B718"
            strokeWidth="3"
          />

          {/* Top 3 Stars inside Shield */}
          <polygon points="100,64 102,69 107,69 103,72 104,77 100,74 96,77 97,72 93,69 98,69" fill="#F5B718" />
          <polygon points="86,70 87,74 91,74 88,77 89,81 86,78 83,81 84,77 81,74 85,74" fill="#F5B718" />
          <polygon points="114,70 115,74 119,74 116,77 117,81 114,78 111,81 112,77 109,74 113,74" fill="#F5B718" />

          {/* Open Book Icon inside Shield */}
          <g transform="translate(100, 106) scale(1.1)">
            {/* Left Page */}
            <path
              d="M -22 6 C -12 2 -4 4 0 10 L 0 -16 C -4 -20 -12 -22 -22 -18 Z"
              fill="#F5B718"
            />
            {/* Right Page */}
            <path
              d="M 22 6 C 12 2 4 4 0 10 L 0 -16 C 4 -20 12 -22 22 -18 Z"
              fill="#F5B718"
            />
            {/* Inner Book Spine & Details */}
            <path d="M 0 10 L 0 -16" stroke="#1B1145" strokeWidth="2" />
            <path d="M -18 -8 L -4 -11" stroke="#1B1145" strokeWidth="1.5" />
            <path d="M -18 -2 L -4 -5" stroke="#1B1145" strokeWidth="1.5" />
            <path d="M 4 -11 L 18 -8" stroke="#1B1145" strokeWidth="1.5" />
            <path d="M 4 -5 L 18 -2" stroke="#1B1145" strokeWidth="1.5" />
          </g>

          {/* Bottom Stars below Shield */}
          <polygon points="100,126 102,129 105,129 103,131 104,134 100,132 96,134 97,131 95,129 98,129" fill="#F5B718" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-black tracking-tight text-[#1B1145] uppercase ${textSizeClasses[size]}`}>
            Reforço Escolar
          </span>
          <span className="font-extrabold text-[#D89C03] tracking-widest text-xs uppercase flex items-center gap-1">
            Borja Castillo <span className="text-[10px] bg-[#1B1145] text-amber-300 px-1.5 py-0.5 rounded font-bold">Jacobina - BA</span>
          </span>
        </div>
      )}
    </div>
  );
};
