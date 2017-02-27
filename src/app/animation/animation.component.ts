import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/core";

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations:[

        trigger('focusPanel',[
            state('inactive',style({
                transform: 'scale(1)',
                backgroundColor:'#95039a',
            })),
            state('active',style({
                transform: 'scale(1.2)',
                backgroundColor:'#039a49',
            })),
            transition('inactive => active', animate('1000ms ease-in',style({
                transform:'rotate(90deg)',
            }))),
            transition('active => inactive', animate('1000ms ease-out')),
        ]),


        trigger('movePanel',[
            transition('void => *', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(-200px)',offset: 0}),
                    style({opacity: 1, transform: 'translateY(25px)',offset: .75}),
                    style({opacity: 1, transform: 'translateY(0)',offset: 1}),
                ]))
            ])
        ]),

        trigger('heightTrigger',[
            state('noHeight',style({
                height:'0',
            })),
            state('fullHeight',style({
                height:'*',
            })),
            transition('noHeight <=> fullHeight',[animate('400ms')])
        ]),


        trigger('flyInOut',[
            transition(':enter',[
            // transition('void => *',[
                style({transform: 'translateX(-100%)',backgroundColor:'#95039a'}),
                animate('1s')
            ]),
            transition(':leave',[
            // transition('* => void',[
                style({transform: 'translateX(100%)',backgroundColor:'#006d70'}),
                animate('1s')
            ]),
        ]),


  ]
})
export class AnimationComponent implements OnInit {

    click_active : string = "inactive!";
    heightState : string = "fullHeight";
    showDiv : boolean = true;


    toggleMove(){
        this.click_active = (this.click_active === "inactive" ? "active" : 'inactive');
    }
    toggleHeight(){
        this.heightState = (this.heightState === "noHeight" ? "fullHeight" : 'noHeight');
    }
    toggleFly(){
        // this.showDiv = ! this.showDiv
        this.showDiv = this.showDiv ? false : true
    }

    animationStart(event : any){
        // console.log("Start")
        // console.log(event.fromState);
        // console.log(event.toState);
        // console.log(event.totalTime);
    }
    animationDone(event : any){
        // console.log(event.fromState);
        // console.log(event.toState);
        // console.log(event.totalTime);
        // console.log("Done");
    }



  constructor() { }

  ngOnInit() {

  }

}
