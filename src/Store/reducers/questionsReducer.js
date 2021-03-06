const initState = {
  questions: [
    {
      id: 1,
      question: 'Warum ist die Banane krumm?',
      answerOne: 'Darum',
      answerTwo: 'Ibims',
      answerThree: 'Test',
      answerFour: 'Bla',
      correctAnswer: '1',
      lernsektor: 'Medizin',
      kommentar: '',
    },
    {
      id: 2,
      question: 'Was ist react?',
      answerOne: 'Eine Süßigkeit',
      answerTwo: 'Eine Kampfsportart',
      answerThree: 'Deine Mudda',
      answerFour: 'Ein Javascript Framework',
      correctAnswer: '4',
      lernsektor: 'Medizin',
      kommentar: '',
    },
  ],
};

const questionsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      console.log('added Question', action.question);
      return state;
    case 'UPDATE_QUESTION':
      console.log('updatedQuestion', action.question);
      return state;
    case 'DELETE_QUESTION':
      console.log('delete Question', action.question);
      return state;
    case 'DELETE_QUESTION_ERROR':
      console.log(action.error);
      return {
        ...state,
        authError: 'Frage löschen fehlgeschlagen',
      };
    case 'ADD_QUESTION_ERROR':
      console.log(action.error);
      return {
        ...state,
        authError: 'Frage hinzufügen fehlgeschlagen',
      };
    default:
      return state;
  }
};

export default questionsReducer;
