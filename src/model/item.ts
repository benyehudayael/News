export class Item {
    id: string
    title: string
    content: string

    constructor(item: Item){
        this.id = item.id;
        this.title = item.title;
        this.content = item.content
    }
}