export class Item {
    id: string
    title: string
    content: string
    image: string

    constructor(item: Item){
        this.id = item.id;
        this.title = item.title;
        this.content = item.content;
        this.image = item.image;
    }
}
export class NewItem {

    constructor(
      public id : String,
      public title: String,
      public content: String,
      public image: String,
      public subject: String
    ) {  }
  
  }