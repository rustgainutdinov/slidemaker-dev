export type ElCoordinates = {
    x: number,
    y: number
}

export type GetElCoordinates = (el: HTMLElement) => ElCoordinates;

export type SetElCoordinates = (elCoordinates: ElCoordinates) => void;