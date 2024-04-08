import { useContext, useState } from "react"
import NavBar from "../src/components/NavBar"
import { AppContext } from "../src/components/AppContext"
import UseApi from "../src/components/UseApi"
import PopupGame from "../src/components/PopupGame"
import { motion } from "framer-motion"
import { Button, Card } from "@material-tailwind/react"
import ParticlesComponent from "../src/components/ParticlesComponent"

const Classic = () => {
  const questions = UseApi([{}], "get", "/classic")
  const { jwt, logout, user, isError, role } = useContext(AppContext)
  const [isFinish, setIsFinish] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay))
  }
  const winPoints = async () => {
    setIsCorrect(true)
    await timeout(1000)
    setIsCorrect(false)
  }
  const loosePoints = async () => {
    setIsWrong(true)
    await timeout(1000)
    setIsWrong(false)
  }

  return (
    <div className="h-screen md:bg-normal bg-mobile z-1">
      <ParticlesComponent isError={isError} />
      <NavBar
        jwt={jwt}
        logout={logout}
        pseudo={user ? user : ""}
        role={role ? role : 2}
      />
      {(isCorrect && <PopupGame msg="CORRECT" color="bg-green-500" />) ||
        (isWrong && <PopupGame msg="WRONG" color="bg-red-500" />)}
      {isFinish ? (
        <h1>Fini votre score : {score}</h1>
      ) : (
        <>
          <Card className="flex justify-between mt-10 ml-5 bg-transparent">
            <div>
              {/* COUNTER QUESTION + SCORE */}
              <motion.div
                key={currentQuestion}
                initial="initial"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                variants={counterQuestion}
              >
                <h1 className=" text-xl">
                  {currentQuestion} <span className="text-yellow-400">|</span>{" "}
                  {questions.length}
                </h1>
              </motion.div>
            </div>
            <motion.div
              key={score}
              initial="normal"
              animate="change"
              variants={scoreVariant}
            >
              <div>
                <span className=" text-neutral-800 mr-5 p-5 text-2xl font-bold text-yellow-400">
                  {score}
                </span>
              </div>
            </motion.div>
          </Card>
          {/* QUESTIONS */}
          <Card className="grid bg-transparent justify-items-center max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-4xl lg:px-8">
            <motion.div
              key={currentQuestion}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              variants={interrogationVariant}
            >
              <h1 className="text-center text-xl underline font-bold mb-8 uppercase">
                {questions[currentQuestion].interrogation}
              </h1>
            </motion.div>
            {/* LIST ANSWERS */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={listAnswers}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-10"
            >
              <motion.li
                whileHover={answerVariant.whileHover}
                whileTap={answerVariant.whileTap}
                transition={answerVariant.transition}
                variants={answerVariant}
              >
                <Button
                  className="bg-zinc-100 text-gray-900 rounded-full shadow-lg w-64 sm:w-96 h-16 text-md md:text-lg"
                  onClick={() => checkAnswer(1)}
                >
                  A.&nbsp;&nbsp;{questions[currentQuestion].first_answer}
                </Button>
              </motion.li>
              <motion.li
                whileHover={answerVariant.whileHover}
                whileTap={answerVariant.whileTap}
                transition={answerVariant.transition}
                variants={answerVariant}
              >
                <Button
                  className="bg-zinc-100 text-gray-900 rounded-full shadow-lg w-64 sm:w-96 h-16 text-md md:text-lg"
                  onClick={() => checkAnswer(2)}
                >
                  B.&nbsp;&nbsp;{questions[currentQuestion].second_answer}
                </Button>
              </motion.li>
              <motion.li
                whileHover={answerVariant.whileHover}
                whileTap={answerVariant.whileTap}
                transition={answerVariant.transition}
                variants={answerVariant}
              >
                <Button
                  className="bg-zinc-100 text-gray-900 rounded-full shadow-lg w-64 sm:w-96 h-16 text-md md:text-lg"
                  onClick={() => checkAnswer(3)}
                >
                  C.&nbsp;&nbsp;{questions[currentQuestion].third_answer}
                </Button>
              </motion.li>
              <motion.li
                whileHover={answerVariant.whileHover}
                whileTap={answerVariant.whileTap}
                transition={answerVariant.transition}
                variants={answerVariant}
              >
                <Button
                  className="bg-zinc-100 text-gray-900 rounded-full shadow-lg w-64 sm:w-96 h-16 text-md md:text-lg"
                  onClick={() => checkAnswer(4)}
                >
                  D.&nbsp;&nbsp;{questions[currentQuestion].fourth_answer}
                </Button>
              </motion.li>
            </motion.ul>
          </Card>
        </>
      )}
    </div>
  )
}

export const scoreVariant = {
  normal: {
    opacity: 1,
    scale: 0.5,
  },
  change: {
    opacity: 1,
    borderRadius: 50,
    scale: 1,
  },
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001,
  },
}
export const counterQuestion = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}
export const interrogationVariant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  scale: {
    type: "spring",
    damping: 2,
    stiffness: 100,
    restDelta: 0.001,
  },
}
export const answerVariant = {
  whileHover: {
    scale: 1.2,
    color: "#fcba03",
  },
  whileTap: { scale: 0.8 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
export const listAnswers = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
}

export default Classic
