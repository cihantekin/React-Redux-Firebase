const initState = {
    projects: [
        { id: 1, title: "Spora Git !", content: "Göğüs çalışılacak." },
        { id: 2, title: "Kitap Oku !", content: "Yeni kitaba başlanacak" },
        { id: 3, title: "Sinemaya Git !", content: "bla bla bllaaa." },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;
        default:
            console.log(state)
    }
    return state;
}

export default projectReducer