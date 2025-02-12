'use client'
import { ActivitySquare, MessageSquare, RadioIcon, User2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const SideNav = () => {
    const navItems = [
        {
          name: "chat",
          link: "/whatsapp/chat",
          icon: <MessageSquare/>,
        },
        {
          name: "status",
          link: "/whatsapp/status",
          icon: <ActivitySquare/>,
        },
        {
          name: "channel",
          link: "/whatsapp/channel",
          icon: <RadioIcon/>,
        },
        {
          name: "communities",
          link: "/whatsapp/communities",
          icon: <User2/>,
        },
      ]
  return (
    <div className='flex flex-col gap-3'>
        {navItems.map((item,id)=> {
            return (
                <Link key={id} className={ 'text-black' } href={item.link} >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default SideNav