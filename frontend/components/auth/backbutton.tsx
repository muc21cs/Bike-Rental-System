"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface FooterProps {
  label: string;
  backHref: string;
}

export const BackButton: React.FC<FooterProps> = ({
  label,
  backHref,
}: FooterProps) => {
        {console.log(backHref)}

  return (
    <Button
      variant="link"
      className="font-normal w-full flex justify-center items-center gap-x-2"
      size="sm"
    >
      <p>{label}?</p>
     {label === "Already have an account" ? (
        <Link href={backHref}>sign-in</Link>
      ) : (
        <Link href={backHref}>sign-up</Link>
      )}
    </Button>
  );
};
