'use client';
import { Button, Card, CardBody, CardFooter, Divider } from '@nextui-org/react'
import { member } from '@prisma/client'
import { Image } from '@nextui-org/react'

import React from 'react'
import { calculateAge } from '../lib/utill'
import { link } from 'fs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    member:member
}

export default function MemberSide  ({member}: Props) {
    const pathname = usePathname();
    const basePath = `/Members/${member.userId}`

    const navLinks = [
        {name: 'Profile', href:`${basePath}`},
        {name: 'photos', href:`${basePath}/photos`},
        {name: 'chat', href:`${basePath}/chat`}
    ]


    return (
       <Card className='w-full mt-10 m-10 items-center h-[80vh] '>

        <Image 
        height ={200}
        width = {200}
        src ={member?.image || '/images/user.png'}
        alt =  'user Profile image'
        className='rounded-full mt-6 aspect-square object-cover'

        />

        <CardBody>
            <div className='flex flex-col items-center'> </div>

            <div className='text-2xl'>
                {member.name},{calculateAge(member.dateOfbirth)}
            </div>
            <div className='text-sm text-neutral-500'>
                {member.city},{member.country}
            </div>
            <Divider className='my-3' />

            <nav className='flex flex-col p-4 ml-4 text-2xl gap-4'>
                {navLinks.map(link => (
                    <Link href={link.href}
                    key={Link.name}
                    className={`block rounded ${pathname === link.href ?
                     'text-secondary' : 'hover:text-secondary-50'}`}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            
            <CardFooter>

                <Button
                as={Link}
                href='/Members'
                fullWidth
                color='secondary'
                variant ='bordered' >
                    Go back
                </Button>
                
            </CardFooter>
        </CardBody>

       </Card>
    )
  
}
