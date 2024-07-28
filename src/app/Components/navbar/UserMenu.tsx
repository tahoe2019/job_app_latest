'use client';


import { signOutUser } from '@/app/actions/authactions';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react';


import Link from 'next/link'
import React from 'react'

type Props = {

    user: Session['user']
}

export default function  UserMenu ({user}: Props)  {
  return (
    <Dropdown placement='buttom-end'>

        <DropdownTrigger>
            <Avatar
            as='button'
            isBordered
            className='transition-transform'
            color='primary'
            name={user?.name || 'user avater'}
            size='sm'
            src={user?.image || '/images/user.png'} />

            </DropdownTrigger>  

            

            <DropdownMenu variant='flat' aria-label='user aaction menu'>

                <DropdownSection showDivider>
                    <DropdownItem isReadOnly as='span' className='h-14 flex flex-row' aria-label='username'>
                          
                         signed in as {user?.name} 

                    </DropdownItem>
                </DropdownSection>

                <DropdownItem as={Link} href='/member/edit'>
                     
                     Edit Profile

                </DropdownItem>
                
                <DropdownItem color='danger' onClick={async () => signOutUser()}>
                    
                    LogOut

                </DropdownItem>
                
            </DropdownMenu>
       

    </Dropdown>
  )
}
