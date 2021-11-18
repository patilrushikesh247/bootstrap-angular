import { AfterViewInit,Component, ElementRef,ViewChild } from '@angular/core';
import { fromEvent} from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'bootstrapAngular';
 
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('myInput2') myInput2!: ElementRef;
  reqdata:any;
  reqdata2:any;
  constructor(private loadingBar: LoadingBarService) {}


  ngAfterViewInit(){
 const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
    map( event =>event.target.value),
    debounceTime(2000)
    )

searchTerm.subscribe(res=>{
  console.log(res);
  this.reqdata=res;
})




const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
  map( event =>event.target.value),
  debounceTime(1000),
  distinctUntilChanged()
  )

searchTerm2.subscribe(res=>{
console.log(res);
this.reqdata2=res;
})

}



startLoading() {
  this.loadingBar.start();
}
stopLoading(){
  this.loadingBar.complete();
}


}
