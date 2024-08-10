import React from 'react'
import { getMembers } from '../actions/memberActions'
import MemberCard from './MemberCard';

export default async function Members ()  {
 const member = await getMembers();

  return (

       <div className='mt-10 mr-10 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
        {member && member.map(member => (
         <MemberCard member={member} key={member.id} />

         
        ))}
      
    </div>
  )
}
