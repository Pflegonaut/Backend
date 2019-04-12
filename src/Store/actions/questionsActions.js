export const createQuestion = question => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection("questions")
      .add({
        ...question,
        authorFirstName: "Richard",
        authorLastName: "Menning",
        authorId: 11,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_QUESTION",
          question
        });
      }).catch((error) => {
        dispatch({
            type: 'ADD_QUESTION_ERROR',
            error
        })
      });
  };
};
