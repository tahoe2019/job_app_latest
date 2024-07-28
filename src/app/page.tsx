import { Button, button } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { auth, signOut } from "./auth";

export default async function Home() {

  const session = await auth();

  return (

    <div>

      <h3 className="text-2xl font-semibold"> user session data</h3>
      { session ? (
        <div>
          <pre>{JSON.stringify(session,null,2)}</pre>
          <form action={async () => {
            'use server';

            await signOut();

          }}>

    <Button 
       type="submit"
        color="primary" 
        variant="bordered" 
        startContent={<FaRegSmile  size={20}/>}>
        call me tahoe 
    </Button>
          </form>
        </div>
      ):(
        <div>not sign in</div>
      )}


     


    

    </div>





    
  );
}
