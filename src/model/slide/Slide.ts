import Content from "./content/Content"

export type ContentList = {
    [key: string]: Content
}

export type Slide = {
    slideId: number,
    background: string,
    animation: number,
    svgDemo: string,
    contentList: ContentList
}
