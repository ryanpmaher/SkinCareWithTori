export interface QuizQuestion{
  quest: string
  answer: string[]
}

export class QuizQuestionListDB{ 
  static QuizQuestionList = [
    {
      quest: "What is your skin type?",
      answer: ["Oily","Dry","Sensitive","Average"]
    },
    {
      quest: "What is your budget?",
      answer: ["$","$$","$$$"]
    }
  ]
}