const initState = {
    projects: [
        {id: 1, title: "Spora Git !", content: "Göğüs çalışılacak."},
        {id: 2, title: "Kitap Oku !", content: "Yeni kitaba başlanacak"},
        {id: 3, title: "Sinemaya Git !", content: "bla bla bllaaa."},
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer