import Presentation from "../../../model/Presentation";

function getDefaultPresentation(): Presentation {
    return {
        name: "newPresentation",
        date: new Date(),
        author: "newAuthor",
        slides: []
    }
}

export default getDefaultPresentation
