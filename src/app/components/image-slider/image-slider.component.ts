import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
} from "@angular/core";

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.css"],
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @ViewChild("imageSlider", { static: true }) imgSlider: ElementRef;
  @ViewChildren("img") imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    console.log("ngOnInit", this.imgSlider);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit", this.imgs);
    this.imgs.forEach((item) => {
      // item.nativeElement.style.height = "100px"; //angular不推荐直接操纵dom，因为容易引起注入攻击，而用render2的话会相对安全，因为它内部会执行传入检查。
      this.rd2.setStyle(item.nativeElement, "height", "100px");
    });
  }
}
