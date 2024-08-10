
import { Button, button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { auth, signOut } from "./auth";
import { BiFullscreen } from "react-icons/bi";
import { Carousel } from "flowbite-react";
import {ImagesCard} from './Components/HomeComponent/imagescard'
import { getMembers } from "./actions/memberActions";
import MemberCard from "./Members/MemberCard";
import { Category } from "./Components/HomeComponent/category";


export default async function Home() {

  const session = await auth();
  const member = await getMembers();

  return (

    <><ImagesCard/><>

    







      <div>


      <div className='mt-10 mr-10 ml-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
        {member && member.map(member => (
         <MemberCard member={member} key={member.id} />

         
        ))}
      
    </div>

        <Category />

        <h3 className="text-2xl font-semibold"> user session data</h3>
        {session ? (
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <form action={async () => {
              'use server';

              await signOut();

            } }>

             

              <Button
                type="submit"
                color="primary"
                variant="bordered"
                startContent={<FaRegSmile size={20} />}>
                call me tahoe
              </Button>
            </form>
          </div>
        ) : (
          <div>not sign in</div>
        )}







      </div></></>





    
  );
}
