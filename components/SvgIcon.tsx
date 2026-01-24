
import React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  d?: string; // SVG Path data
  size?: number | string; // Number for pixels, string for Tailwind classes (e.g., "w-6 h-6")
}

export const SvgIcon: React.FC<SvgIconProps> = ({ 
  d, 
  children, 
  size = 24, 
  className = "", 
  viewBox = "0 0 24 24",
  fill = "none", 
  stroke = "currentColor", 
  strokeWidth = 1.5,
  ...props 
}) => {
  const isNumber = typeof size === 'number';
  const sizeStyle = isNumber ? { width: size, height: size } : {};
  const sizeClass = !isNumber ? size as string : '';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox={viewBox} 
      fill={fill} 
      stroke={stroke} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`${sizeClass} ${className}`.trim()}
      style={{ ...sizeStyle, ...props.style }}
      {...props}
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
};
