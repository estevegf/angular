import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnChanges {
  @Input('source')
  source;
  lazyImageObserver: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      this.observeAndLazyLoadImages(this.el.nativeElement);
    }
  }
  private observeAndLazyLoadImages(lazyImage: Element) {
    const intersectionObsPresent = 'IntersectionObserver' in window;
    if (intersectionObsPresent) {
      if (this.lazyImageObserver) {
        this.lazyImageObserver.unobserve(lazyImage);
        this.lazyImageObserver = null;
      }
      this.lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setImageSrcFromDataset(entry.target);
            this.lazyImageObserver.unobserve(entry.target);
            this.lazyImageObserver = null;
          }
        });
      }, {rootMargin: '150px', threshold: 0});
      this.lazyImageObserver.observe(lazyImage);
    } else {
      // Since IntersectionObserver is not supported by the browser
      // we will load all images right away
      this.setImageSrcFromDataset(lazyImage);
    }
  }
  private setImageSrcFromDataset(imageTag) {
    imageTag.src = this.source;
  }
}
