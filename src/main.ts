import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hi There");
    observer.next("HOw are you");
    setInterval(() => {
      observer.next("I am good");
    }, 2000);
    // observer.complete();
    // observer.next("HOw are you 3");
  } catch (err) {
    observer.error(err);
  }
});

var observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("completed")
);

setTimeout(()=>{
    observer.unsubscribe();
},6001)

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
