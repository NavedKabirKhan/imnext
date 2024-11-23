"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { animatePageOut } from "@/animations";

export default function TransitionLink({ href, label, children }) {
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [url, setUrl] = useState("");

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    animatePageOut(href, router); // Animate and route after animation
  };

  useEffect(() => {
    const updatedUrl = `${pathname}`;
    setUrl(updatedUrl);
    // console.log("Updated URL: ", updatedUrl);
  }, [pathname]);

  // Determine if the link should be disabled
  const isCurrentUrl = url === href;
// console.log("isCurrentUrl: ", url);
// console.log("href: ", href);


  return (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={!isCurrentUrl ? handleClick : undefined}
        style={{
          pointerEvents: isCurrentUrl ? "none" : "auto",
          cursor: isCurrentUrl ? "default" : "pointer",
          // borderBottom: isCurrentUrl ? "1px solid black" : "none", 
          textDecoration: isCurrentUrl ? "underline" : "none",
        }}
      >
        
        {children || label}
      </a>
    </Link>
  );
}
