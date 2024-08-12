'use client'
import { Button, Card, CardBody, CardHeader, Input, Link } from '@nextui-org/react'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GiPadlock } from 'react-icons/gi'
import {useForm} from 'react-hook-form';
import { loginschem } from '@/app/lib/loginschema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInUser } from '@/app/actions/authactions'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


export default function LoginForm ()  {

  const router = useRouter();

  const {register, handleSubmit,formState: {errors, isValid,isSubmitting}} = useForm<loginschem>({
    resolver: zodResolver(loginschem),
    mode:'onTouched'
  });
  
  const  onsubmit =async (data: loginschem ) => {
    const result = await signInUser(data);

    if(result.status === 'success'){
    router.push('/Members');
    router.refresh();
  }else{
  toast.error(result.error as string);
  }
}

  return (

    <Card className='w-2/5 mx-auto'>

        <CardHeader className='flex justify-center flex-col items-center'>
       <div className='flex flex-col gap-2 items-center text-primary'>
        
        <div className='flex flex-row items-center gap-3'>

        <GiPadlock size={30} />
        <h1 className='text-3xl font-semibold '>Login</h1>
        </div>
        
        <p className='text-neutral-500'>Willkommen</p>
        
        
       </div>

       </CardHeader>

       <CardBody className='' >

        <form onSubmit={handleSubmit(onsubmit)}>

            <div className='space-y-4  '>
                <Input
                defaultValue=''
                label='Email'
                variant='bordered'
                {...register('email')}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message as string}
                  />

                  <Input
                   isInvalid={!!errors.password}
                   errorMessage={errors.password?.message as string}
                  defaultValue=''
                label='Password'
                variant='bordered'
                type='Password'
                {...register('password')}
                  />

                  <Button 
                  isLoading= {isSubmitting}
                  isDisabled={!isValid} fullWidth color='primary' type='submit' >
                    Login
                  </Button>

                    <div className='flex justify-center items-center gap-3'>
                        <Button color='#FFFFFF'>
                        <FcGoogle size={30}  />
                            </Button>
                   
                    <FaFacebook size={30}/>
                    </div>
 
                   
            </div>

        </form>

       </CardBody>

    </Card>
    
  )
}
  