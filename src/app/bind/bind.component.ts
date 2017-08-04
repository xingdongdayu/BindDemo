import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  // imgUrl: string = "http://placehold.it/400x200";
  // size: number = 2;
  // divClass: string;
  // isBig:boolean = false;
  // divMultiClass: any = {
  //   a: false,
  //   b: false,
  //   c: false
  // }
  // isDev: boolean = true;
  // divStyle: any = {
  //   color: 'red',
  //   background: 'yellow'
  // };

  // name: string;

  birthday: Date = new Date();
  size: number = 7;
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.divClass = "a b c";
    //   this.isBig = true;
    //   this.divMultiClass = {
    //     a: true,
    //     b: false,
    //     c: true
    //   };
    //   this.isDev = false;
    //   this.divStyle = {
    //     color: 'yellow',
    //     background: 'red'
    //   };
    // }, 3000);

    // setInterval(() => {
    //   this.name = "Tom";
    // }, 3000);
  }

  // doOnClick(event:any){
  //   console.log(event);
  // }
  // doOnInput(event:any){
  //   console.log(event.target.value);// 打印出来的是input标签的dom属性，表示当前值，随输入的内容变化
  //   console.log(event.target.getAttribute('value'));// 打印出来的是input标签的html属性，表示初始值，不会变
  // }

  // doInput(event:any){
  //   this.name = event.target.value;
  // }
}
