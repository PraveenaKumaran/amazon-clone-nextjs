"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React,{useState} from 'react'

const page = () =>{
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  return (
    <section className="bg bg-gray-50 dark:bg-gray-900">
      <div className = " flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0" >
        <a href = "#"
        className = "flex items-center mb-2 text 2xl: font-semibold text-shadow-gray-900 dark:text-white" 
        >
          <Image
          src = "/amazon-logo.png"
          alt = "amazon logo"
          height = {150}
          width = {150}
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className = "p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className = "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                type="email"
                name="email"
                id = "email"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
                className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                p-2.5 w-full "
                placeholder = "example@gmail.com"
                required
                />
                </div>
                <div>
                  <label htmlFor="password" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                < input
                type = "password"
                name="password"
                id = "password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                p-2.5 w-full "
                placeholder = "password"
                required
                />
                </div>
                <button className = Create an account
                </button>
              
            </div>
            

          </div>


        </div>
      </div>
    </section>
  );
}
export default page