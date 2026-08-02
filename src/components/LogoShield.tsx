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
        <img
          src="https://i.imgur.com/0nYfUqP.png"
          alt="Reforço Escolar Borja Castillo Logo"
          className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
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
