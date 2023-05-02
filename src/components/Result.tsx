import { motion } from 'framer-motion';
import { useEffect, useState } from 'preact/hooks';

const Result = ({
  choises,
  resetGame,
}: {
  choises: boolean[];
  resetGame: () => void;
}) => {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  useEffect(() => {
    choises.forEach((choise) => {
      if (choise) {
        setCorrectCount((prev) => prev + 1);
      } else {
        setWrongCount((prev) => prev + 1);
      }
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      class="flex flex-col justify-center gap-5 items-center w-screen h-screen text-[#33cfffff] text-2xl font-mono min-w-[320px] text-center max-w-[900px]"
    >
      <h1>Result</h1>
      <div class="flex flex-col gap-5">
        <p>Correct: {correctCount}</p>
        <p>Wrong: {wrongCount}</p>
      </div>
      <div>
        <button
          onClick={resetGame}
          class="bg-[#33cfffff] text-black px-5 py-2 rounded-md hover:bg-[#33cfffff] hover:text-white transition-all"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
};

export default Result;
