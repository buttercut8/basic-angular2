import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    Infomation: any = [
        {
            name : 'Remy Nguyen',
            email : 'remy@gmail.com',
            phone : '097 683 0624',
            birthday : '22/02/1996',
            city : 'TPHCM',
            detail : 'http://localhost:4200/detail',
            aboutMe : "So we can add that to the import statement. Before we use the HostListener decorator, let's add another HostBinding for the is-favorite-hovering CSS class. "
        },
        {
            name : 'Johnny Nguyen',
            email : 'Johnny@gmail.com',
            phone : '098 513 4588',
            birthday : '17/02/1996',
            city : 'TPHCM',
            detail : 'http://localhost:4200/Johnny',
            aboutMe : "Okay, let's add some HostListeners. The HostListener decorator takes in the name of the event as a string for the first argument and an optional second argument that is an array of arguments that a targeted event will emit. "
        },
        {
            name : 'Alex Lê',
            email : 'Alex@gmail.com',
            phone : '467 661 3478',
            birthday : '20/02/1996',
            city : 'DN',
            detail : 'http://localhost:4200/Alex',
            aboutMe : "Now we want to listen for the on mouseenter event on the host element so we write the at HostListener with a pair of parentheses and set the event name to the string mouseenter."
        },
        {
            name : 'Tony Nguyen',
            email : 'Tony@gmail.com',
            phone : '091 354 9645',
            birthday : '19/02/1996',
            city : 'DN',
            detail : 'http://localhost:4200/Tony',
            aboutMe : "And remember, Angular works with native events without the on prefix. And that is why this string value is mouseenter instead of onMouseEnter. Okay, after the decorator, we need to have a function signature."
        },
        {
            name : 'Joshas Tran',
            email : 'Joshas@gmail.com',
            phone : '093 961 8544',
            birthday : '29/02/1996',
            city : 'DN',
            detail : 'http://localhost:4200/Joshas',
            aboutMe : "Now this can be whatever name you want. Let's name it onMouseEnter. It doesn't need a parameter, so we will leave that empty. And in the function, we set this.hovering to true. We also want to listen for on mouse leave."
        },
        {
            name : 'Kenny Tran',
            email : 'Kenny@gmail.com',
            phone : '984 126 2254',
            birthday : '28/02/1996',
            city : 'TPHCM',
            detail : 'http://localhost:4200/Kenny',
            aboutMe : "Okay, now over in our browser, we can inspect one of the media items and then mouse over and off of the favorite icon and see the class getting applied and removed."
        },

    ];

    OnDeleteInfomation(){
        console.log("This is delete info in file Item");
    }








  constructor() { }

  ngOnInit() {
  }

}
