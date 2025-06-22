"use client"

import { useRouter } from 'next/navigation';
import React,{useState} from 'react'

const page = () =>{
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  return (
    <section className="bg bg-gray-50 dark:bg-">
      <div>page</div>
    </section>
  );
}
export default page