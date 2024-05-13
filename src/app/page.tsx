import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Image from "next/image";
import Snake from "/snake-1.png"
import { ArrowRight, Check, Star } from "lucide-react";
import { FeaturesData, LandingPageFeatures, TestimonialsData, cn } from "@/lib/utils";
import Phone from "@/components/shared/Phone";
import { Icons } from "@/components/shared/Icons";
import React from "react";
import parse from 'html-react-parser';
import Reviews from "@/components/shared/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";


export default function Home() {

  

  return (
   <div className="bg-slate-50 overflow-x-hidden">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 
        sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52" >
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                    <Image src='/snake-1.png' alt="logo"  width={100} height={100} />
                  </div>
                  <h1 className="relative w-fit tracking-tight text-balance mt-16 
                  font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                    Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
                  </h1>
                  <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                    Capture your favorite memories with your own,{" "} <span className="font-semibold">one-of-one</span> phone case.
                    CaseCobra allows you to protect your memories, not just your phone case.
                  </p>
                  <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                      <div className="space-y-2">

                          {LandingPageFeatures.map((feature) => {
                            return(
                              <li key={feature.description} className="flex gap-1.5 items-center text-left">
                                <Check className="h-5 w-5 shrink-0 text-green-500" />
                                {feature.description}
                             </li>
                            )
                          })}
                         
                          
                      </div>
                  </ul>
                  <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                        <div className="flex -space-x-4">
                            {...Array(5).fill(null).map((_,index) => {
                               return(
                                <Image key={index} src={`/users/user-${index+1}.png`} className="inline-block object-cover  rounded-full  ring-2 ring-slate-100" alt="user" width={40} height={40} /> 
                               )
                            })}
                            
                        </div>
                        <div className="flex flex-col justify-between items-center sm:items-start">
                            <div className="flex gap-0.5">
                              {...Array(5).fill(null).map((_) => {
                                return(
                                  <Star key={_} className="h-4 w-4 text-green-600 fill-green-600" />
                                )
                              })}
                            </div>
                            <p><span className="font-semibold">1.250</span> happy customers</p>
                        </div>
                  </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-1 w-full flex 
            justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
                  <div className="relative md:max-w-xl">
                        <Image src={"/your-image.png"} alt="your image" 
                        className="absolute left-56 -top-20 select-none hidden sm:block xl:block" width={400} height={400}  />
                        <Image src={'/line.png'} alt="line" 
                        className="absolute w-20 -left-6 -bottom-6 select-none" width={400} height={400} />
                        <Phone className="w-64" imgSrc="/testimonials/1.jpg" width={250} height={250} />
                  </div>
            </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
            <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                            <h2 className="order-1 mt-2 tracking-tight text-center 
                            text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                              What our 
                              <span className="relative px-2">customers 
                               <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600" /> 
                              </span>{' '}
                              say 
                            </h2>
                            <Image src={'/snake-2.png'} alt="logo" className="order-0 lg:order-2" width={80} height={80} />
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
                          
                                                       
                              {TestimonialsData.map((data,index) => (
                                <div key={index}>

                                    <div className="flex gap-0.5 mb-2">
                                      {Array(5).fill(null).map((_,i) => (
                                          <Star key={i}  className="h-5 w-5 text-green-600 fill-green-600" />
                                      ))}
                                    </div>
                                    <div className="text-lg leading-8" >
                                      <p>
                                        {'"'} { parse(data.testimonial)} {'"'}
                                      </p>
                                    </div>
                                    <div className="flex gap-4 mt-2">
                                      <Image width={80} height={80} alt="user" src={data.image} className="rounded-full object-cover" />
                                      <div className="flex flex-col">
                                        <p className="font-semibold">{data.name}</p>
                                        <div className="flex gap-1.5 items-center">
                                            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                                            <p className="text-sm">Verified Purchase</p>
                                        </div>
                                      </div>
                                    </div>
                                
                                </div>
                              ))}

                              
                          

                         
                    </div>
            </MaxWidthWrapper>

            <div className="pt-16">
              <Reviews />
            </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
              <div className="mb-2 px-6 lg:px-8">
                  <div className="mx-auto">
                  <h2 className="order-1 mt-2 tracking-tight text-center 
                  text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                          Upload your photo and get{' '}
                          <span className="relative px-2 bg-green-600 text-white">
                          your own case 
                          
                          </span>{' '}
                          now.
                  </h2>      
                  </div>
              </div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                  <div className="flex flex-col relative items-center md:grid grid-cols-2 gap-40">
                    <Image src={'/arrow.png'} 
                    alt="arrow" 
                    className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                    width={80}
                    height={80}
                    />
                    <div className="relative h-80 md:h-full w-full md:justify-self-end 
                    max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl" >
                          <Image src={'/horse.jpg'} alt='horse' className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 w-full h-full"  width={260} height={260} />
                    </div>

                    <Phone className="w-60" imgSrc="/horse_phone.jpg" />
                  </div>
              </div>
              <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
                    {FeaturesData.map((description,index) => (
                        <li className="w-fit" key={index}>
                          <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                          {description.description}
                        </li>
                    ))}

                    <div className="flex justify-center">
                      <Link className={buttonVariants({
                        size: 'lg',
                        className: "mx-auto mt-8"
                      })} href={'/configure/upload'}>
                        Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </div>
                    
              </ul>
        </MaxWidthWrapper>
      </section>
      

   </div>
  );
}
