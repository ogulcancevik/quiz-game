import * as he from 'he';
import { useEffect, useState } from 'preact/hooks';

interface IAnswersProps {
  correct: string;
  incorrect: string[];
  index: number;
  nextQuestion: (answer: string, correct: string) => void;
}
const Answers = (props: IAnswersProps) => {
  const { correct, incorrect, index, nextQuestion } = props;
  const [answers, setAnswers] = useState<string>('');
  useEffect(() => {
    const answers = [correct, ...incorrect].sort(() => Math.random() - 0.5);
    setAnswers(answers.join(', '));
  }, [correct, incorrect, index]);
  return (
    <div>
      {answers &&
        answers.split(', ').map((answer, index) => {
          return (
            <div
              class="min-w-[320px]"
              key={index}
              onClick={() => nextQuestion(answer, correct)}
            >
              <div class="shadow-md rounded flex flex-col px-8 py-6 my-4 border border-[#33cfffff] hover:bg-[#33cfffff] transition-all cursor-pointer">
                <div class="flex items-center justify-center">{he.decode(answer)}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Answers;
