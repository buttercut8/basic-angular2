import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables : Collectable[] = [
        {description: 'This is Vue JS 2.x' ,type:'book'},
        {description: 'This is Typescript' ,type:'game'},
        {description: 'This is Angular 2.x' ,type:'news'},
        {description: 'This is Ionic' ,type:'entertainment'},
        {description: 'This is Laravel' ,type:'fashion'},
    ];

    private collection : Collectable[] = []

    getCollectables(){
        return this.collectables;
    }

    getCollection(){
        return this.collection;
    }

    addCollection(item : Collectable){
        if(this.collection.indexOf(item) !== -1){
            return ;
        }
        this.collection.push(item);
    }

    removeCollection(item : Collectable){
        this.collection.splice(this.collection.indexOf(item),1)
    }


}
