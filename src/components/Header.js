"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Authentication from './Authentication'
export default function Header() {
 
  return (
  <>
    <div className='flex justify-between items-center max-w-6xl mx-auto sticky top-0'>
        <div>
       <Link href='/'> <Image src='/main-qimg-f83f339ce81c0b09c48d9f0d8f4753af.webp' alt='instagram' 
          width={90} height={90} className='hidden lg:inline-flex'/></Link>

         <Link href='/'> <Image src='/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.avif' alt='instagram logo' 
          width={45} height={45} className='lg:hidden'/></Link>
        </div>      
        <div>
            <input type='text' className='p-2 m-2 bg-gray-50' placeholder='search'/>
        </div>
        <div>
            <Authentication/>
        </div>
    </div>
  </>
  )
}
