function add_item() {
    let msg = document.getElementById("box")
    console.log(msg.value);
    let list_Item = document.getElementById("list_item")
    // console.log(list_Item.value);

    if(msg.value != "")
    {
        let ullist = document.createElement("li");
        ullist.appendChild(document.createTextNode(msg.value));
        console.log("HELLO" + msg.value);
        list_Item.appendChild(ullist);

        msg.value ="";
        ullist.onclick = function(){
            this.parentNode.removeChild(this)
        }
    }else{
        alert("Enter items")
    }
    
}