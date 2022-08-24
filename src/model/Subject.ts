export class Subject {
    id: string
    name: string
    showInMenu: boolean
    showInNewItem: boolean
    sort: number

    constructor(subject: Subject){
        this.id = subject.id;
        this.name = subject.name;
        this.showInMenu = subject.showInMenu;
        this.showInNewItem = subject.showInNewItem;
        this.sort = subject.sort;
    }
}