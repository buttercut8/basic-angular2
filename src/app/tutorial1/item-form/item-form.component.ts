import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { ItemService } from "../item/item.service";
import { Router } from "@angular/router";
@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  form;
  constructor(
      private formBuilder : FormBuilder,
      private itemService : ItemService,
      private router : Router
  ) {}

  onSubmit(mediaItem){
      console.log(mediaItem);
      this.itemService.add(mediaItem);
      this.router.navigate(['/list-item',mediaItem.city]);
      this.form = this.formBuilder.group({
          isFavorite: this.formBuilder.control(''),
          name: this.formBuilder.control('', Validators.compose([
             Validators.required,
             Validators.pattern('[\\w\\-\\s\\/]+')
          ])),
          email: this.formBuilder.control('',Validators.required),
          phone: this.formBuilder.control('',Validators.required),
          city: this.formBuilder.control('',Validators.required),
          aboutMe: this.formBuilder.control('',Validators.required),
          birthday: this.formBuilder.control('', this.birthdayValidator),
          detail: this.formBuilder.control('http://localhost:4200/detail'),
      });
  };

  ngOnInit() {
      this.form = this.formBuilder.group({
          isFavorite: this.formBuilder.control(''),
          name: this.formBuilder.control('', Validators.compose([
             Validators.required,
             Validators.pattern('[\\w\\-\\s\\/]+')
          ])),
          email: this.formBuilder.control('',Validators.required),
          phone: this.formBuilder.control('',Validators.required),
          city: this.formBuilder.control('',Validators.required),
          aboutMe: this.formBuilder.control('',Validators.required),
          birthday: this.formBuilder.control('', this.birthdayValidator),
          detail: this.formBuilder.control('http://localhost:4200/detail'),
      });
  }

  birthdayValidator(control) {
      if(control.value.trim().length === 0 ){
          return null;
      }
      let year = parseInt(control.value);
      let minYear = 1950;
      let maxYear = 2020;
      if(year >= minYear && year <= maxYear){
          return null;
      } else {
          return {
              'year' : {
                min: minYear,
                max: maxYear
               }
          };
      }
  }





}
