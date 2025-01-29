"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animation"
import { useEffect } from "react"


const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      router.prefetch(href);
    }
  }, [href]);

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <div
    {...props}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default TransitionLink