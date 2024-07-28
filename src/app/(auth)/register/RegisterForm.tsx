'use client'
import { Button, Card, CardBody, CardHeader, Input, Link } from '@nextui-org/react'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GiPadlock } from 'react-icons/gi'
import {useForm} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod'
import { registerschema } from '@/app/lib/schemas/registerschema'
import { registerUser } from '@/app/actions/authactions'
import { error } from 'console'

export default function  RegisterForm ()  {
 
    
    const {register, handleSubmit,setError, formState: {errors, isValid,isSubmitting}} = useForm<registerschema>({
     // resolver: zodResolver(registerschema),
        mode:'onTouched'
      });
      
      const onsubmit = async (data: registerschema ) => {
        const result = await registerUser(data);

        if (result.status === 'success'){
          console.log('user registered succesfully');
        }
        else{

          if(Array.isArray(result.error)){
            result.error.forEach((e: any) => {
              const fieldName = e.path.join('.') as 'email' | 'name' | 'password' ;
              setError(fieldName, {message: e.message})

            });
          }else {
            setError('root.serverError', {message: result.error});
          }

        }

      }
    
      return (
    
        <Card className='w-2/5 mx-auto'>
    
            <CardHeader className='flex justify-center flex-col items-center'>
           <div className='flex flex-col gap-2 items-center text-primary'>
            
            <div className='flex flex-row items-center gap-3'>
    
            <GiPadlock size={30} />
            <h1 className='text-3xl font-semibold '>Register</h1>
            </div>
            
            <p className='text-neutral-500'>Willkommen</p>
            
            
           </div>
    
           </CardHeader>
    
           <CardBody className='' >
    
            <form onSubmit={handleSubmit(onsubmit)}>
    
                <div className='space-y-4  '>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                    defaultValue=''
                    label='Name'
                    variant='bordered'
                    {...register('name')}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message }
                      />

                    <Input
                    defaultValue=''
                    label='Email'
                    variant='bordered'
                    {...register('email')}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message }
                      />

                      </div>
    
                      <Input
                       isInvalid={!!errors.password}
                       errorMessage={errors.password?.message }
                      defaultValue=''
                    label='Password'
                    variant='bordered'
                    type='Password'
                    {...register('password')}
                      />

                      {errors.root?.serverError && (
                        <p className='text-danger-50 text-sm'>
                          {errors.root.serverError.message}
                        </p>
                      )}
    
                      <Button 
                      isLoading={isSubmitting}
                      isDisabled={!isValid} fullWidth color='primary' type='submit' >
                        Register
                      </Button>
    
     
                       
                </div>
    
            </form>
    
           </CardBody>
    
        </Card>
  )
}
