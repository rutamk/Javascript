// Task 1 
// function getItem(){
//     console.log(this);
// }

// getItem(); //inside functions, "this" is referencing the global object it may be window or undefined or smht else it all depends on the context. if this is loggeg in a function which is not nexted then it will return the value Window(in browser console).

// // task 2
// const item = {
//     title: "Bali",
//     getItem(){
//         console.log("this", this);
//     },
// };

// item.getItem(); // in case of objects when we have method inside objects, we are always referencing the object so this will return that obj.

// task 3
// class Item {
//     title = "Bali";
//     getItem() {
//         console.log("this",this);
        
//     }
// }

// const item = new Item();
// item.getItem();

// class Item {
//     title = "Bali";
//     getItem() {
//         function someFn(){
//             console.log("this",this);
//         }
//         someFn();
//     }
// }// if we have a this inside a fn inside a class then we cant access that instance and cant use the properties of this

// const item = new Item();
// item.getItem();

//how to correct it.

// 1.
// class Item {
//     title = "Bali";
//     getItem() {
//         const this_ = this;
//         function someFn(){
//             console.log("this",this_);
//         }
//         someFn();
//     }
// }// now we already got ref of the instance object before entering the function.

// const item = new Item();
// item.getItem();

// 2. Better approach
class Item {
    title = "Bali";
    getItem() {
        return () => {console.log(this);
        };
    }
}//use arrow functions

const item = new Item();
item.getItem()(); //call the returned fn using the second ();