"use client";

import Logo from "@/components/Header/Logo";

export default function Header(props: any) {
    
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{props.name}</h1>
      {props.children}
      <Logo {...props} />
      
    </div>
  );
} 