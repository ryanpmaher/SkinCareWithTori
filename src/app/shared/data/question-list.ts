export interface QuizQuestion{
  quest: string
  answer: string[]
}

export class QuizQuestionListDB{ 
  static QuizQuestionList = [
    {
      quest: "What is your skin type?",
      answer: ["Oily","Dry","Sensitive","Average"],
      multi: false
    },
    {
      quest: "What is your budget?",
      answer: ["$","$$","$$$"],
      multi: false
    },
    {
      quest: "What are your skin concerns",
      answer: ["Fine lines and wrinkles", "Redness/irritation", "Dryness", "Congestion/Dullness", "Breakouts/Acne", "Dark Circles"],
      multi: true
    }
  ]
}