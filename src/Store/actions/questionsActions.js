export const createQuestion = question => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    const profil = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    
    firestore
      .collection("questions")
      .add({
        ...question,
        authorFirstName: profil.firstname,
        authorLastName: profil.lastname,
        authorId: authorId,
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



