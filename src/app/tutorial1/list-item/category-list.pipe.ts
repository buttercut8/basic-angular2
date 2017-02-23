import { Pipe } from "@angular/core";

@Pipe({
      name: 'categoryList'
})
export class CategoryListPipe {
      transform(mediaItems){
            var categories = [];
            mediaItems.forEach(mediaItems => {
                  if(categories.indexOf(mediaItems.category) <= -1){
                        categories.push(mediaItems.category);
                  }
            });
            return categories.join(', ');
      }
}
