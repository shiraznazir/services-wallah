"use client";
import React from 'react'
import Installation from '../components/Installation';
import BreadCrumbComp from '../components/BreadCrumbComp';

const Services = () => {
  return (
    <div className='px-10 py-5'>
            <BreadCrumbComp title="Home" subTitle="Services" />
        <Installation />
    </div>
  )
}

export default Services