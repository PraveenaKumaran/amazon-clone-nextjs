"use client"

import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React,{useState} from 'react'

const page = () =>{
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  const handleSignup = async () => {
    if(email && password) {
      const response = await signup(email,password);    // Wait for the response from the signup function
      
      if(response.status == 201){                 // If the signup is successful, reads user info from the boby of response given by the server, then store it in user.
        const user = await response.json();
        setUserInfo(user);                        // Store the user information in localStorage
        alert("Account created successfully");
        router.push("/");                         // Redirect to the home page
      }else if (response.status == 400){
        alert("Email already exists");
      }else{
        alert("Something went wrong, please try again later");
      }
    }else{
      alert("Please fill both email & password fields");
    }
  }
  
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
                className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full "
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
                className = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full "
                placeholder = "password"
                required
                />
                </div>
                <button className = "w-full text-white bg-orange-400 hover:bg-orange-500 font-medium text-sm py-2.5 rounded-lg px-5 text-center" onClick={handleSignup}>
                Create an account
                </button>
                <p>
                  Already have an account? {" "}
                  <Link>
                  </Link>
                </p>
              
            </div>
            

          </div>


        </div>
      </div>
    </section>
  );
}

export default page