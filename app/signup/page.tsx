"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { validateEmail, validatePassword } from "@/utils/validator"
import ErrorMessage from "@/components/error-message/ErrorMessage"
import { CheckCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<Validate>({emailError: false, passwordError: false, passwordMismatch: false});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const DISPLAY_DURATION = 2000;
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setError({...error, emailError: true});
      return;
    } 

    if (!validatePassword(password)) {
      setError({...error, passwordError: true, passwordMismatch: false});
      return;
    }
    
    if(password != confirmPassword) {
      setError({...error, passwordError: false, passwordMismatch: true});
      return;
    }
    // here the user is signedUp successfully! 
    setIsSuccessful(true);
    setError({ emailError: false, passwordError: false, passwordMismatch: false});
    
    const user = {
      name: name,
      email: email,
      password: password
    }

    localStorage.setItem("user", JSON.stringify(user)); //storing the user in the local storage for now.
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("users", JSON.stringify([...users, user])); //adding the signedUp user to local storage.
  }

    useEffect(()=> {
      let timeoutId : NodeJS.Timeout;
      if(isSuccessful){
        timeoutId =  setTimeout(()=> {
          setIsSuccessful(false);
          router.push("/questionnaire");
        }, DISPLAY_DURATION);
      }
      return () => clearTimeout(timeoutId);
    },[isSuccessful])

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 p-6">
      <div className="w-full max-w-4xl flex flex-wrap rounded-3xl overflow-hidden shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-zinc-800 p-12"
        >
          <div className="max-w-md mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl text-center md:text-left font-extrabold text-white mb-6"
            >
              Create Your Account
            </motion.h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMessage error={error.emailError} message="Invalid Email Address."/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <ErrorMessage error={error.passwordError} message="Password must be at least 8 characters long with at least a capital, a small letter and and one special character."/>
                <ErrorMessage error={error.passwordMismatch} message="Passwords doesn't match."/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <button
                  type="submit"
                  className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-800 hover:bg-orange-900 focus:ring-1 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </motion.div>
            </form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium"
                >
                  <span className=" text-orange-500 hover:text-orange-400 transition duration-150 ease-in-out">Log in</span>
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 bg-zinc-800 hidden md:flex items-center justify-center p-12"
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-800 to-orange-600 rounded-2xl flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Join the Lift Community</h3>
              <p className="text-lg">Start tracking your progress and achieving your fitness goals today</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange-700 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -top-20 -left-20 w-80 h-80 bg-orange-600 rounded-full opacity-20"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    <AnimatePresence>
      {isSuccessful && (
        <motion.div 
          initial={{ scale: 0, opacity: 0, x: -100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0, opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-10 left-10"
        >
          <span className="bg-green-200/50 p-3 rounded-2xl">
            Signup Was Successful <CheckCheck className="inline text-green-500" />
          </span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: DISPLAY_DURATION/1000, ease: "linear" }}
            className="absolute p-[2px] -bottom-[9px] h-1 bg-green-500 ml-[5%]  w-[90%] origin-left rounded-4xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

