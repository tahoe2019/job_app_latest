import { Button, Link, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import React, { Fragment } from 'react'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'
import { auth } from '@/app/auth'
import UserMenu from './UserMenu'

export default async function TopNav ()  {
    const session = await auth();
  return (
    
    <Navbar
    maxWidth='xl'
    className='bg-gradient-to-r from-blue-400 to-blue-700'
    classNames={{
        item:[
            'text-xl',
            'text-white',
            'uppercase',
            'data-[active=true]:text-yellow-200'
        ]
    }}
    >
        <NavbarBrand as={Link} href='/'>
            <GiMatchTip size={40} className='text-black' />

            <div className='font-bold text-3xl flex '>
                <span className='text-white '>Jobs</span>
                <span className='text-white'>Firma</span>
            </div>

        </NavbarBrand>

        <NavbarContent justify='center'>

           <NavLink href='/Members' label='job' />
           <NavLink href='/Lists' label='firmaList' />
           <NavLink href='/Messages' label='messages' />
           
        </NavbarContent>

        <NavbarContent justify='end'>
            {session?.user ? (
                <UserMenu user={session.user} />
            ):(
                <>
            <Button as={Link} href='/login' variant='bordered' className='text-white' > Login</Button>
            <Button as={Link} href='/register' variant='bordered' className='text-white' > Register</Button>

                </>
            )}

           
        </NavbarContent>
    </Navbar>
  )
}
