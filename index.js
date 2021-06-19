const addBtn=document.querySelector("#add");
const input=document.querySelector("#list-input")
const displayTable=document.querySelector("#list-table")

const list=[{title:"first",checked:true,id:Date.now()}];


function addToList()
{
    console.log("clicked");
    let newtask={
        title:input.value,
        checked:false,
        id:Date.now()
    }
    list.push(newtask)
    input.value="";
    input.focus()
    displayList(list);
}


function displayList()
{
    
    let tableList=list.map(task=>renderListItem(task))

    console.log(tableList)
    displayTable.innerHTML=tableList.join("")
}


function renderListItem(itemToRender)
{
    return `<li>${itemToRender.title}</li>`;
}


addBtn.addEventListener("click",addToList)