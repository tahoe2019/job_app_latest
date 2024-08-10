'use client' // Error boundaries must be Client Components
 
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { useEffect } from 'react'
import { BiSolidError } from 'react-icons/bi'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex items-center justify-center vertical-center'>
     <Card className='w-2/5 mx-auto'>
     <CardHeader className='flex flex-col items-center justify-center'>

     <div className='flex flex-row gap-2 items-center text-primary'>
      <BiSolidError size={30}/>
      <h2 className='text-3xl font-semibold'>Fehler</h2>
     </div>
     </CardHeader>
     <CardBody className='flex justify-center text-danger'>
      {error.message}
     </CardBody>

     <CardFooter className='flex justify-center'>

      <Button onClick={() => reset()} color='primary' variant='bordered'>

      versuchen Sie es erneut
      </Button>


     </CardFooter>




     </Card>
      
   
    </div>
  )
}