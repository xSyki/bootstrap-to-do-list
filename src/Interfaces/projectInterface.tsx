type RGB = `rgb(${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | HEX;

export default interface projectInterface {
    id: string,
    name: string,
    color: Color,
}