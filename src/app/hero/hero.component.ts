import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { heroImages } from '../urls';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {
  @ViewChild('siteSwiper') swiperRef: ElementRef | undefined;

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.swiperRef?.nativeElement?.swiper?.update();
  }

  public heroImages = heroImages;
}
