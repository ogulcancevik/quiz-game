export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const fetchQuizQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=10`;
  const { results } = await (await fetch(endpoint)).json();
  return (await results) as IQuestion[];
};

export const quizService = {
  fetchQuizQuestions,
};
