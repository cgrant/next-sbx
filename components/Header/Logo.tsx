"use client";

export default function Logo(props: any) {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl font-bold">{props.name}</h1>
    </div>
  );
}