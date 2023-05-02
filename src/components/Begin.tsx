import { motion } from "framer-motion";

const Begin = ({ startGame }: { startGame: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
     class="flex flex-col gap-7 justify-center items-center h-screen w-screen">
      <button
        onClick={startGame}
        class="border-2 border-[#33cfffff] font-mono text-white font-bold py-4 px-6 rounded hover:bg-[#33cfffff] hover:text-black transition duration-300 ease-in-out"
      >
        Start Game
      </button>
      <div>
        <div class="font-mono text-[#33cfffff] min-w-[320px] text-center max-w-[900px]">
          <span class="font-bold">Rules:</span> You have 30 seconds to answer
          each question. If you don't answer in time, you will get a wrong
          answer. You can only choose one answer per question. Good luck!
        </div>
      </div>
    </motion.div>
  );
};

export default Begin;
