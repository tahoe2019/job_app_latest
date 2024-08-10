import { getMemberByUserId } from '@/app/actions/memberActions'
import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function MemberDetailedPage({params}: {params: {userId: string}}) {
  
  const memeber = await getMemberByUserId(params.userId);
  if(!memeber) return notFound();
  
  return (
    
     <><CardHeader className='text-2xl font-semibold text-primary '>
      das ist ein profile
    </CardHeader>
    <Divider />
    
    <CardBody className=''>
      {memeber.description}
      </CardBody></>
  )
}
