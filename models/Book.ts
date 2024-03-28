import Tag from "./Tag";

export default class Book {
    id: number = 0;
    title: string = '';
    writer: string = '';
    coverImage: string = 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg';
    point: number = 0;
    tags: Tag[] = [];
}