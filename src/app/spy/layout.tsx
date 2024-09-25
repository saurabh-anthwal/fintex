
import LiveOptionsChain from '@/components/options/LiveOptionsChain'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <div className='min-h-screen'>
      <div className='grid md:grid-cols-12 gap-4'>
        <div className='md:col-span-9 border-r'>{children}</div>
        <div className='md:col-span-3'><LiveOptionsChain/></div>
      </div>
    </div>
  )
}

export default layout