import { cn } from "@/lib/utils"
import Image from "next/image"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    className?:string
    imgSrc: string
    dark?: boolean
    width?: number
    height?: number
}

const Phone = ({className,imgSrc,dark = false,width = 300,height = 300,...props} : PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden",className)} {...props}>
       <Image src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} 
       className="pointer-events-none z-50 select-none" alt="phone image" width={width} height={height} />

       <div className="absolute -z-10 inset-0">
          <Image className="object-cover" src={imgSrc} alt="overlaying phone image" width={width} height={height} />
       </div>
    </div>
  )
}

export default Phone