"use client"
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'

const page = () =>{
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const router = useRouter();
}
export default page