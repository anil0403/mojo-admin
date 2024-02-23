import React from 'react'


interface LayoutProps { 
    children: React.ReactNode
    }   

const layout = ({children}: LayoutProps) => {
  return (
    <div className='p-4 w-full h-full'>
        {children}
    </div>
  )
}

export default layout