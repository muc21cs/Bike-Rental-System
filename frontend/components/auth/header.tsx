"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

interface HeaderProps {
  label: string;
  header:string;
}

export const Header: React.FC<HeaderProps> = ({ label,header }: HeaderProps) => {
  return (
    <div className="w-full flex justify-center items-center gap-y-4 flex-col">
      <h1 className={cn(font.className,"text-3xl font-bold")}>{header}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
