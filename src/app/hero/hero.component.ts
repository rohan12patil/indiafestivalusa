import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css/bundle';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }
  public swiperr:any;
  
  ngOnInit(): void {
   this.swiperInit();
  }

  ngAfterContentInit() {
    this.swiperInit();
  }

  public swiperInit(){
    this.swiperr = new Swiper(".siteSwiper", {
      direction: 'horizontal',
      slidesPerView:1,
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }



}



