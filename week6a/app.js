// 1) Use Dom method to div
let divContainer = document.getElementById("container");
[1];
console.log(divContainer);

// 2) use Dom methods to create <h1></h1> element inside of this div
let hOne = document.createElement("h1");
hOne.innerHTML = "this is a header tag.";
document.getElementById("container").appendChild(hOne);

// 3) use DOM methods to create <p></p> element inside of this div.
let pTag = document.createElement("p");
pTag.innerHTML = "this is a paragraph tag";
document.getElementById("container").appendChild(pTag);

// 4) use Dom methods to create <ol></ol> element in the body
let orderList = document.createElement("ol");
orderList.innerHTML = "created a ol";
//5) use DOM methods to create  at least two  <li>/<li> for <ol> you have created.
let listItem = document.createElement("li");
listItem.innerHTML = "first list item";
document.body.appendChild(orderList);
orderList.appendChild(listItem);
let listItem2 = document.createElement("li");
listItem2.innerHTML = "second list item";
orderList.appendChild(listItem2);
// 6) use DOM methods to change the colour of all <li></li> to blue and add some padding for each <li>.
orderList.style.color = "blue"
listItem.style.padding = "10px"
listItem2.style.padding = "6px"
// 7) use DOM methods to change the colour of the <p></p> you created to green.
pTag.style.color = "green"
// 8) use DOM methods to create a new <div> in the body tag.
let newDiv = document.createElement("div")
newDiv.innerHTML = "This is a new div"
document.body.appendChild(newDiv)
// 9) use DOM methods to add an id to the div you created ( search about it).
newDiv.setAttribute("id","new-div")
// 10) use DOM to give this new div border and align text to the centre.
newDiv.style.border = "10px solid purple"
newDiv.style.textAlign = "center"
newDiv.style.padding = "10px"
