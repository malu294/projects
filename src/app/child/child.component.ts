import { Component, OnInit ,AfterContentChecked,
  AfterContentInit,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild, } from '@angular/core';
import { ChildService } from './child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  counter = 0;
  interval: any;

  @Input()
  firstName = '';

  @ContentChild('parentContent', {static: true}) parentContent: any;
  @ViewChild('childContent', {static: true}) childContent: any;

  constructor(private childService :ChildService) {
    console.log('Child Constructor called');
  }

  ngOnInit(): void {
    console.log('Child OnInit - component is initialized');
    console.log('init - ' + this.parentContent);
    console.log('init - ' + this.childContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
    // this.savedata();
    this.getDatas();
  }
  getDatas(){
    debugger
   

    {
      this.childService.getData().subscribe(data => {
        debugger
        alert(data);
        console.log("get data working" + data);
        console.log("user deleted successfully" + data);
      })
    }
  }
  // savedata(){

  //   const postBody = {
  //     "one" : 1,
  //     "two": 2
  // }
  //     this.childService.savedata(postBody).subscribe((data: any) => {
  //       debugger
  //       console.log("user deleted successfully" + data.one);
  //     }, (err: any) => {
  //       console.log("unable to delete the user" + err);
  //     })
    
  // }

  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log('Child OnDestroy - component is destroyed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child Onchanges');
    console.log('onChanges - ' + this.parentContent);
    console.log('onChanges - ' + this.childContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck');
    console.log('doCheck - ' + this.parentContent);
    console.log('doCheck - ' + this.childContent);
  }

  ngAfterContentInit() {
    console.log('Child After Content Init');
    console.log('AfterContentInit - ' + this.parentContent);
    console.log('AfterContentInit - ' + this.childContent);
  }

  ngAfterContentChecked() {
    console.log('Child After Content checked');
    console.log('AfterContentChecked - ' + this.childContent);
  }

  ngAfterViewInit() {
    console.log('Child After View Init');
    console.log('AfterViewInit - ' + this.childContent);
  }

  ngAfterViewChecked() {
    console.log('Child After View checked');
  }
}







