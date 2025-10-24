import React from 'react';
import hkuLogoSvg from '../assets/hku-logo.svg';

interface HKULogoProps {
  className?: string;
}

const HKULogo: React.FC<HKULogoProps> = ({ className = "h-20 w-auto" }) => {
  return (
    <img
      src={hkuLogoSvg}
      alt="香港大學校徽"
      className={className}
    />
  );
};

export default HKULogo;