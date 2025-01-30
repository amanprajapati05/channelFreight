"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animation"
import { useEffect } from "react"
import Link from "next/link"


const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      router.prefetch(href);
    }
  }, [href]);

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <Link
    {...props}
    href={  href}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

export default TransitionLink