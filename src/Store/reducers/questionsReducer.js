const initState = {
  questions: [
    {
      id: 1,
      question: "Warum ist die Banane krumm?",
      answerOne: "Darum",
      answerTwo: "Ibims",
      answerThree: "Test",
      answerFour: "Bla",
      correctAnswer: "1",
      lernsektor: "Medizin",
      kommentar: ""
    },
    {
      id: 2,
      question: "Was ist react?",
      answerOne: "Eine Süßigkeit",
      answerTwo: "Eine Kampfsportart",
      answerThree: "Deine Mudda",
      answerFour: "Ein Javascript Framework",
      correctAnswer: "4",
      lernsektor: "Medizin",
      kommentar: ""
    }
  ]
};

const questionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      console.log("added Question", action.question);
      return state;
    case "ADD_QUESTION_ERROR":
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default questionsReducer;
