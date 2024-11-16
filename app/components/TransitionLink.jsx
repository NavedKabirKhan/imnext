"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { animatePageOut } from "@/animations";

export default function TransitionLink({ href, label, children }) {
  const router = useRouter();
  const transitionPageName = document.getElementById("transitionPageName");

  const handleClick = (e) => {

    e.preventDefault(); // Prevent default navigation
   
    animatePageOut(href, router); // Animate and route after animation
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <a onClick={handleClick}>
        {children || label}
      </a>
    </Link>
  );
}
