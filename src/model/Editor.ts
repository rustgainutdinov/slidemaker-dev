import Presentation from "./Presentation"
import Content from "./slide/content/Content"
import { Slide } from "./slide/Slide"

//TODO: Массив состояний с указателями! Харнить Editor ⁉️ сделаем позже с помощью редукс
//TODO: ActionList -> вынести из Editor ⁉️ сделали, доработки будут в редукс
//TODO: Class Editor ✅
//TODO: Персисцентная структура данных должна быть ⁉️ сделаем позже с редукс
//TODO: Сразу редакс реакт dispatch() -> меняет стейт -> стор знает о новом стейте -> ... ⁉️ сделаем позже с редукс
type Editor = {
	currentPresentation: Presentation;
	currentSlide: Slide;
	currentContent: Content;
}

export default Editor
