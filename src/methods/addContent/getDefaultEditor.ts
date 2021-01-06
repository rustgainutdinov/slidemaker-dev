import Editor from "../../model/Editor";
import getDefaultPresentation from "./getParamsOfContent/getDefaultPresentation";
import createSlide from "./createSlide";

export default function getDefaultEditor(): Editor {
    return createSlide({
        currentPresentation: getDefaultPresentation(),
        currentSlide: null,
        currentContent: null
    });
}