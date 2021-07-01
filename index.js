function (add_item){
let item = document.getElementById("box"); //getting box and ul by adding id
let list_item = document.getElementById("list_item"); 
  if item.value ! = ""}

let make_li = document.getElementById("LI"); //creating element by adding value to it
  make_li.appendChild(createTextNode(item.value));
//adding ul to li
  list_item.appendChild.make-li;
//reset value box
  item.value = "";
//delete a list item onclick
  make_li.onclick = function(){this.ParentNode.removeChild(this)};}

else{
   //alert message when value of box is empty
    alert("C'mon - DO something! What's next? :)");}
}
