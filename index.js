const addBtn=document.querySelector("#add");
const input=document.querySelector("#list-input")

const list=[];


function addToList()
{
    console.log("clicked");
    let newtask={
        name:input.value,
        checked:false,
        id:Date.now()
    }
    list.push(newtask)
    input.value="";

}





addBtn.addEventListener("click",addToList)