export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asyn call to database

        const fireStore = getFirestore();

        fireStore.collection("projects").add({
            ...project,
            authorFirstName: "Khalilou",
            authorLastName: "Fadiga",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project: project })
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err })   
        })
    }
}