
import { Card,CardFooter,Image } from '@nextui-org/react'
import {member}  from '@prisma/client'
import Link from 'next/link'
import React from "react"
import { FaStar } from 'react-icons/fa'
import { calculateAge } from '../lib/utill'

type Props = {
    member: member
}

export default async function MemberCard({member}:Props) {

   

    return (

        <Card 
        fullWidth
        as={Link}
        href={`/Members/${member.userId}`}
        isPressable>
           <Image
           isZoomed
           alt={member.name}
           width={300}
           src={member.image || '/images/user.png'}
           className='aspect-square object-cover'
           ></Image> 

           <CardFooter className='flex justify-start bg-blue-700 overflow-hidden absolute bottom-0 z-10 '>
            <div className='flex flex-row text-white gap-8'
            >
                <span className='font-semibold'>{member.name},{calculateAge(member.dateOfbirth)}</span>
                <span className='text-sm'>{member.city}</span>           




                 
            </div>

              
           </CardFooter>

           
        </Card>
    )
}