import React from 'react';
import Image from 'next/image'
import { Button } from '../button'
import {GoFlame} from 'react-icons/go'
const Hero = () => {
  return (
    <div className='flex w-full flex-col md:flex-row justify-between items-center p-16 pt-20 md:pt-40 gap-20 relative'>
      <div className="absolute left-1/2 w-1/2 gradient-02 inset-0"></div>
      <div className='flex flex-col gap-2 z-10 md:max-w-80 lg:max-w-96'>
        <p className='text-slogan'>Effortless video Creation</p>
        <h1 className='h1'>Incredibly simple and fast</h1>
        <p className="p">Experience a user-friendly, fast, and efficient video editing tool that&apos;s also surprisingly powerful, enabling you to create stunning quickly, without compromising on quality.</p>
        <Button text='Try it now' link= '#download' icon={GoFlame} />
      </div>
      <div className='w-80 lg:w-96 z-10 md:mt-3'>
        <Image src='/hero.png' alt='robotImage' width={450} height={500}/>
      </div>
    </div>
  )
}

export default Hero