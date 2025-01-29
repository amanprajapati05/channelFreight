"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animation"


const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter()
  const pathname = usePathname()

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