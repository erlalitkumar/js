import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any)=>{
    observer.next("Hi There")
    observer.next("HOw are you")
    observer.complete()
    observer.next("HOw are you 3")
});

observable.subscribe((x:any) => addItem(x), (error:any)=> addItem(error),()=>addItem("completed"));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}