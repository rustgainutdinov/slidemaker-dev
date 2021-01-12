import Point from "../../../../model/slide/content/Point";

export type ChangeElSize = (widthOffset: number, heightOffset: number) => void;
export type ChangeDotCoordsByRule = (point: Point) => Point;