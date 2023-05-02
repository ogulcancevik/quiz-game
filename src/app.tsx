import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import Answers from './components/Answers';
import Loader from './components/Loader';
import Question from './components/Question';
import QuestionCounter from './components/QuestionCounter';
import Result from './components/Result';
import useTimer from './hooks/useTimer';
import { IQuestion, quizService } from './services/quiz.service';

export function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(
    null
  );
  const [index, setIndex] = useState<number>(0);
  const [choises, setChoises] = useState<boolean[]>([]);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const questions = await quizService.fetchQuizQuestions();
      setQuestions(questions);
      setCurrentQuestion(questions[index]);
    })();
  }, []);
  const isQuestionCorrect = (answer: string, correct: string) => {
    if (answer === correct) {
      setChoises([...choises, true]);
    } else return setChoises([...choises, false]);
  }
  const nextQuestion = (answer: string, correct: string) => {
    if (index === questions.length - 1) {
      isQuestionCorrect(answer, correct);
      setIsGameFinished(true);
      return;
    }
    isQuestionCorrect(answer, correct);
    setIndex(index + 1);
    resetTimer();
  };
  useEffect(() => {
    setCurrentQuestion(questions[index]);
  }, [index]);
  const { time, resetTimer } = useTimer(30);
  useEffect(() => {
    if (time === 0) {
      nextQuestion('a', 'b'); // fake answer for wrong answer
      resetTimer();
    }
  }, [time]);
  const resetGame = () => {
    setIndex(0);
    setChoises([]);
    setIsGameFinished(false);
  };
  if (currentQuestion) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        class="flex flex-col justify-center gap-10 items-center w-screen h-screen"
      >
        {!isGameFinished ? (
          <>
            <QuestionCounter index={index} totalQuestion={questions.length} />
            <Question question={currentQuestion?.question} />
            <Answers
              incorrect={currentQuestion?.incorrect_answers}
              correct={currentQuestion?.correct_answer}
              index={index}
              nextQuestion={nextQuestion}
            />
            <div class="font-mono"><span class="font-bold text-[#33cfffff]">{time}</span> seconds left to answer</div>
          </>
        ) : (
          <Result choises={choises} resetGame={resetGame} />
        )}
      </motion.div>
    );
  }
  return (
    <div class="flex justify-center items-center h-screen w-screen">
      <Loader />
    </div>
  );
}
