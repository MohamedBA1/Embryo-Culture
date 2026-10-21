import React from 'react';
import { Language } from '../types';
import enLogo from '../assets/images/logo_en.png';
import arLogo from '../assets/images/logo_ar.png';

interface EmbryoLogoProps {
  lang?: Language;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const LogoBadge: React.FC<{
  variant?: 'colored' | 'white' | 'dark';
  sizeClass?: string;
  className?: string;
}> = ({ variant = 'colored', sizeClass = 'w-10 h-13', className = '' }) => {
  const isWhite = variant === 'white';
  const stemColor = isWhite ? '#FFFFFF' : '#153C3C';
  const potColor = isWhite ? '#FFFFFF' : '#358245';
  const strokeColor = isWhite ? '#FFFFFF' : '#1F4E3A';

  return (
    <svg
      viewBox="0 0 100 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClass} ${className} shrink-0`}
      aria-label="Embryo Culture Emblem"
    >
      {/* Outer rounded rectangle enclosure */}
      <rect
        x="6"
        y="6"
        width="88"
        height="123"
        rx="26"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Terraced botanical pot / substrate container */}
      <path
        d="M20 90 H80 L76 102 H70 L66 112 H34 L30 102 H24 Z"
        fill={potColor}
      />
      {/* Subtle organic step cut in base */}
      <path
        d="M26 90 C32 90 68 90 74 90 C72 96 70 100 68 102 H32 C30 100 28 96 26 90 Z"
        fill={potColor}
      />
      <path
        d="M32 104 C40 104 60 104 68 104 C66 108 64 112 62 112 H38 C36 112 34 108 32 104 Z"
        fill={potColor}
      />

      {/* Main central sprout stem emerging from pot */}
      <path
        d="M48 90 C48 76 50 56 56 40 C57 37 58 32 59 28 C56 31 52 42 49 52 C45 66 44 80 44 90 Z"
        fill={stemColor}
      />

      {/* Leaf 1: Lower Left leaf */}
      <path
        d="M47 68 C41 62 26 56 22 42 C20 46 22 55 31 64 C37 70 43 73 47 74 Z"
        fill={stemColor}
      />

      {/* Leaf 2: Upper Right leaf */}
      <path
        d="M55 46 C60 38 68 28 77 26 C75 32 72 41 63 47 C58 50 54 51 53 51 Z"
        fill={stemColor}
      />

      {/* Leaf 3: Lower Right leaf */}
      <path
        d="M51 68 C58 64 74 63 80 70 C74 77 65 80 54 77 C51 76 49 74 48 73 Z"
        fill={stemColor}
      />

      {/* Delicate sprout tip accent */}
      <circle cx="59" cy="27" r="1.5" fill={stemColor} />
    </svg>
  );
};

export const LeafContourWatermark: React.FC<{
  className?: string;
  color?: string;
  opacity?: number;
}> = ({ className = '', color = 'currentColor', opacity = 0.12 }) => {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Dynamic artistic contour of the sprout & leaves from original branding */}
      <path
        d="M100 240 C95 180 102 120 120 70 C123 60 126 50 128 40"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Left Leaf Contour */}
      <path
        d="M102 170 C85 150 45 135 35 95 C32 108 38 135 65 160 C80 175 95 182 104 185"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Top Leaf Contour */}
      <path
        d="M118 115 C132 90 152 65 175 60 C170 75 162 100 140 115 C128 122 118 125 115 125"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Bottom Leaf Contour */}
      <path
        d="M108 170 C125 160 165 155 180 172 C165 190 142 196 116 188"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EmbryoLogo: React.FC<EmbryoLogoProps> = ({
  lang = 'en',
  size = 'md',
  className = '',
}) => {
  const isArabic = lang === 'ar';

  const sizeMap = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32',
  }[size] || 'h-16';

  return (
    <img 
      src={isArabic ? arLogo : enLogo} 
      alt="Embryo Culture Logo" 
      className={`${sizeMap} w-auto object-contain ${isArabic ? 'scale-125 lg:scale-150 transform-gpu' : ''} ${className}`}
    />
  );
};
