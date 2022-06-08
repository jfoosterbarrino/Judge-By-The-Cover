

const listActions={
    addBook: "addBook",
    removeBook: "removeBook",
    clearList: "clearList"
}

function listReducer(readingList, {type, book}){
    switch(type){
        case listActions.addBook:
            return [...readingList, book]
        case listActions.removeBook:
            let newList = readingList.slice()
            for(let novel of newList){
                if(novel.id === book.id){
                    newList.splice(newList.indexOf(novel), 1)
                    return newList
                }
            }
            return newList
        case listActions.clearList:
            return []
        default:
            throw new Error('Pot Calling the Kettle Black')
    }
}

export{
    listReducer,
    listActions
}