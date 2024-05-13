import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const LandingPageFeatures = [
  {
    description: "High-quality, durable material"
  },
  {
    description: "5 year print guarantee"
  },
  {
    description: "Modern iphone models supported"
  }
]


export const TestimonialsData = [
  {
    testimonial: "The case feels durable and even got a compliment on the design. Had the case fot two and a half months now and <span className=\"p-0.5 bg-slate-800 text-white\">the image is super clear</span>, on the case I had before, the image started fading into yellow-ish color after a couple of weeks. Love it.",
    name: "Jonathan",
    image: "/users/user-1.png"
  },
  {
    testimonial: "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span className=\'p-0.5 bg-slate-800 text-white\'> looks brand new after about half a year </span>. I dig it.",
    name: "Josh",
    image: "/users/user-4.png"
  }
]


export const FeaturesData = [
  {
    description: "High-quality silicone material"
  },
  {
    description: "Scratch and fingerprint resistant coating"
  },
  {
    description: "Wireless charging compatible"
  },
  {
    description: "5 year print warrantly"
  }
]