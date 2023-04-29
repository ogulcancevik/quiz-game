import { useEffect, useState } from 'preact/hooks';

interface IAnswersProps {
  correct: string;
  incorrect: string[];
  type: string;
  index: number;
}
const Answers = (props: IAnswersProps) => {
  const { correct, incorrect, type, index } = props;
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
            <div class="grid grid-cols-2 gap-4" key={index}>
              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                {type === 'multiple' ? (
                  <div class="flex items-center" onClick={() => console.log(answer === correct)}>
                    <label htmlFor="answer" class="uppercase">
                    {String.fromCharCode(97 + index)}
                    </label>
                    <input
                      id="answer"
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-gray-600 hidden"
                    />
                    <span class="ml-2 text-gray-700">{answer}</span>
                  </div>
                ) : (
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                    />
                    <span class="ml-2 text-gray-700">{answer}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Answers;
