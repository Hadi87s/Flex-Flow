"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin, Github } from "lucide-react"
import { Spotlight } from "../ui/spotlight-new"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"

const words = [
  {
    text: "Elevate",
  },
  {
    text: "Your",
  },
  {
    text: "Fitness",
  },
  {
    text: "Journey",
  },
  {
    text: "With Us.",
    className: "text-blue-500 dark:text-orange-600",
  },
];

const GradientOverlay = () => {
    const controls = useAnimation()
  
    useEffect(() => {
      controls.start({
        background: [
          // Expanded orange variants
          "radial-gradient(circle at 10% 20%, rgba(255, 237, 178, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)",  // Light amber
          "radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.15) 50%, transparent 100%)",      // Medium orange
          "radial-gradient(circle at 50% 50%, rgba(180, 83, 9, 0.15) 0%, rgba(124, 45, 0, 0.1) 50%, transparent 100%)",         // Deep orange
          "radial-gradient(circle at 30% 70%, rgba(255, 215, 161, 0.1) 0%, rgba(252, 211, 77, 0.08) 50%, transparent 100%)",    // Pale orange
          "radial-gradient(circle at 70% 30%, rgba(249, 168, 37, 0.18) 0%, rgba(245, 158, 11, 0.12) 65%, transparent 100%)",    // Vibrant orange
        ],
      }, {
        duration: 25,  // Increased duration for smoother transition
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
      })
    }, [controls])
  
    return <motion.div className="absolute inset-0" animate={controls} />
  }

export default function LandingPage() {
  return (
    <div className="m-3 rounded-3xl relative flex flex-col items-center justify-center h-[96vh] overflow-hidden bg-zinc-900 text-white">
      <GradientOverlay />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <Spotlight />
        <TypewriterEffectSmooth words={words} />
        <p className="text-xl mb-8">Track, analyze, and conquer your lifting goals</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/login"
            className="px-8 py-3 bg-orange-800 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300 outline-white hover:outline-2 hover:outline-offset-2"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-4 left-4 flex space-x-4"
      >
        <Link href="https://www.instagram.com/itsnewhadi107/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-white hover:text-orange-600 transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/in/hadi87s" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-white hover:text-orange-600 transition-colors" />
        </Link>
        <Link href="https://github.com/Hadi87s" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:text-orange-600 transition-colors" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-4 right-4 text-sm text-white"
      >
        Made with ❤️ by Hadi
      </motion.div>
    </div>
  )
}

