"use client";

import { ReactNode } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function GlassCard({ children, className = "", style, ...props }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
