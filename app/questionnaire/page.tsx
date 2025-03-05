"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question: "What's your gender?",
    type: "select",
    options: ["Male", "Female"],
  },
  {
    id: 2,
    question: "What are your height and weight?",
    type: "double-input",
    placeholders: ["Height (cm)", "Weight (kg)"]
  },
  {
    id: 3,
    question: "What's your preferred gym split?",
    type: "select",
    options: ["Arnold Split", "Push Pull Legs", "Bro Split", "Full Body"]
  },
  {
    id: 4,
    question: "What's your primary fitness goal?",
    type: "select",
    options: ["Build Muscle", "Lose Fat", "Improve Strength", "Enhance Overall Fitness"]
  }
];

const pageVariants = {
  initial: { opacity: 0, x: '-10%' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '10%' }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
}

const elementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const router = useRouter();

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleAnswer = (answer: string, index?: number) => {
    const newAnswers = [...answers]
    if (questions[currentQuestion].type === 'double-input') {
      newAnswers[currentQuestion] = index === 0 
        ? `${answer},${newAnswers[currentQuestion].split(',')[1] || ''}`
        : `${newAnswers[currentQuestion].split(',')[0] || ''},${answer}`
    } else {
      newAnswers[currentQuestion] = answer
    }
    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    console.log('Final answers:', answers)
    // Here you would typically send the answers to your backend, I know :)
    const user : IUser = JSON.parse(localStorage.getItem("user") || "{}");
    const fullUserData = {...user, gender: answers[0], height: answers[1].split(",")[0], weight: answers[1].split(",")[1], split: answers[2], goal: answers[3]};
    // Send the fullUserData to be stored in the database, I will store it in the local storage until adding the database configuration.
    localStorage.setItem("user", JSON.stringify(fullUserData));
    const users : IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users);
    
    const updatedUsers = users.map((u : IUser) => u.name === user.name? fullUserData : u);
    console.log(updatedUsers);
    
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("user");
    router.push("/login");
  }

  const isAnswered = () => {
    if (questions[currentQuestion].type === 'double-input') {
      const [height, weight] = answers[currentQuestion].split(',')
      return height && weight
    }
    return answers[currentQuestion] !== ''
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="bg-zinc-700 p-8 rounded-2xl shadow-2xl max-w-md w-full"
        >
          <motion.h2 
            className="text-center md:text-left text-3xl font-bold mb-6 text-white"
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {questions[currentQuestion].question}
          </motion.h2>
          {questions[currentQuestion].type === 'select' ? (
            <motion.select
              value={answers[currentQuestion]}
              onChange={(e) => handleAnswer(e.target.value)}
              className="w-full p-3 rounded-lg bg-zinc-600 text-white outline-none focus:ring-2 focus:ring-white focus:bg-zinc-700 transition duration-300"
              variants={elementVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <option value="">Select an option</option>
              {questions[currentQuestion].options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>
          ) : questions[currentQuestion].type === 'double-input' ? (
            <motion.div 
              className="flex space-x-4"
              variants={elementVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {questions[currentQuestion].placeholders?.map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  value={answers[currentQuestion].split(',')[index] || ''}
                  onChange={(e) => handleAnswer(e.target.value, index)}
                  placeholder={placeholder}
                  className="w-1/2 p-3 rounded-lg bg-zinc-600 text-white focus:ring-2 focus:ring-white transition duration-300"
                />
              ))}
            </motion.div>
          ) : (
            <motion.input
              type="text"
              value={answers[currentQuestion]}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={questions[currentQuestion].placeholders?.[0] || 'Enter your answer'}
              className="w-full p-3 rounded-lg bg-zinc-600 text-white border border-zinc-500 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-300"
              variants={elementVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          )}
          <motion.button
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: 0.3 }}
            className={` mt-8 w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 ${
              isAnswered()
                ? 'bg-orange-500 hover:bg-orange-700 cursor-pointer ring-offset-1 hover:ring-1'
                : 'bg-zinc-600 cursor-not-allowed'
            }`}
            onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNext}
            disabled={!isAnswered()}
            style={{ outline: 'none' }}
          >
            {currentQuestion === questions.length - 1 ? (
              'Let The Gains Start'
            ) : (
              <>
                Next
                <ChevronRight className="inline-block ml-2" />
              </>
            )}
          </motion.button>
          <motion.div 
            className="mt-6 flex justify-evenly"
            variants={elementVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-10 rounded-full ${
                  index === currentQuestion ? 'bg-orange-600' : 'bg-zinc-500'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

