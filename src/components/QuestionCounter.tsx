const QuestionCounter = ({
  index,
  totalQuestion,
}: {
  index: number;
  totalQuestion: number;
}) => {
  return (
    <div class="text-[#33cfffff] font-mono min-w-[320px] flex flex-col gap-2 justify-center items-center">
      <div class="uppercase text-xl tracking-widest">Question</div>
      <div class="flex gap-2 font-bold">
        <div class="text-[#ff3383ff]">{index + 1}</div>
        <span>of</span>
        {totalQuestion}
      </div>
    </div>
  );
};

export default QuestionCounter;
