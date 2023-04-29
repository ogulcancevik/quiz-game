import { useEffect, useState } from 'preact/hooks';
import Answers from './components/Answers';
import Question from './components/Question';
import { IQuestion, quizService } from './services/quiz.service';

export function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(
    null
  );
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const questions = await quizService.fetchQuizQuestions();
      setQuestions(questions);
      setCurrentQuestion(questions[index]);
    })();
  }, []);
  const nextQuestion = () => {
    if (index === questions.length - 1) return;
    setIndex(index + 1);
    setCurrentQuestion(questions[index]);
  };
  return (
    <>
      {currentQuestion && (
        <div class="flex-col justify-center items-center w-screen h-sreen">
          <Question question={currentQuestion?.question} />
          <Answers
            incorrect={currentQuestion?.incorrect_answers}
            correct={currentQuestion?.correct_answer}
            type={currentQuestion?.type}
            index={index}
          />
        </div>
      )}

      <button onClick={nextQuestion}>Next</button>
    </>
  );
}
