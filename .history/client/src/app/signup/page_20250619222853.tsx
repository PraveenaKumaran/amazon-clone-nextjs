"use client"

import { useRouter } from 'next/navigation';
import React,{useState} from 'react'

const page = () =>{
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  return (
    <section className="bg bg-gray-50 dark:bg-gray-900">
      <div className = " flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0" >
        <a 
        
      </div>
    </section>
  );
}
export default page