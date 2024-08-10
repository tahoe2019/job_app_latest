import { getMemberByUserId } from '@/app/actions/memberActions'
import React, { ReactNode } from 'react'
import MemberSide from '../MemberSide';
import { notFound } from 'next/navigation';
import { Card } from '@nextui-org/react';

export  default async function Layout ({children,params}:
     {children: ReactNode, params: {userId: string}})  {

        const member = await getMemberByUserId(params.userId);

        if(!member) return notFound();


  return (
    <div className='grid grid-cols-12 gap-5 h-[80vh]'>

        <div className='col-span-3'>
            <MemberSide  member={member  } />
        </div>

        <div className='col-span-9'>
            <Card className='  m-10 mr-10 h-[80vh] '>
                {children}
            </Card>
        </div>
      
    </div>
  )
}

