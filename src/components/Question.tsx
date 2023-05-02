import * as he from "he";

const Question = ({ question }: { question: string }) => {
  return (
    <div class="text-[#33cfffff] text-2xl font-mono min-w-[320px] text-center max-w-[900px]">
      {he.decode(question)}
    </div>
  );
};

export default Question;
