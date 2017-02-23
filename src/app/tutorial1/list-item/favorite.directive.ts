import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector:'[itemFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite  = true;
}
