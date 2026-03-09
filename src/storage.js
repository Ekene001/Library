import { Library } from "./library.js";

export const storage = (() => {
    const saveLibrary = () => {
        const Books = Library.getBooks()
        // convert to string in json
        const json = JSON.stringify(Books);
        // store in local storage
        localStorage.setItem('Library', json);
    }

    const retrieveLibrary = () => {
        const Data = localStorage.getItem('Library')

        if(!Data) return [];
        return JSON.parse(Data)
    }

    return{
        saveLibrary,
        retrieveLibrary
    }
})();