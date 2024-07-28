import { Button, button } from "@nextui-org/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <Button color="primary" variant="bordered" startContent={<FaRegSmile  size={20}/>}>
      call me tahoe 
    </Button>
  );
}
