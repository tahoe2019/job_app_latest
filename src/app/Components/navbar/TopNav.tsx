import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'

export default function TopNav ()  {
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
                <span className='text-white '>Next</span>
                <span className='text-white'>Match</span>
            </div>

        </NavbarBrand>

        <NavbarContent justify='center'>

           <NavLink href='/Members' label='matchs' />
           <NavLink href='/Lists' label='Lists' />
           <NavLink href='/Messages' label='messages' />
           
        </NavbarContent>

        <NavbarContent justify='end'>

            <Button as={Link} href='/Login' variant='bordered' className='text-white' > Login</Button>
            <Button as={Link} href='/Register' variant='bordered' className='text-white' > Register</Button>

        </NavbarContent>
    </Navbar>
  )
}
