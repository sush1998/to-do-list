const addBtn=document.querySelector("#add");
const input=document.querySelector("#list-input")
const displayTable=document.querySelector("#list-table")
const deleteBtn=document.querySelector(".delete-btn")

const list=[];


function addToList()
{
    //console.log("clicked");
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

    console.table   (tableList)
    displayTable.innerHTML=tableList.join("")
}


function deleteItem(itemToDelete)
{
    console.log("delete clicked")
    console.log(itemToDelete);
    let i=list.filter(item=>item.id!=itemToDelete)
    console.log(i);
    list.length=0;
    list.push(...i)
    displayList()

}


function renderListItem(itemToRender)
{
    return `<li>${itemToRender.title}</li>
    <button class="delete-btn" id=${itemToRender.id} onclick=deleteItem(${itemToRender.id})>X</button>`;
}



addBtn.addEventListener("click",addToList)
//deleteBtn.addEventListener("click",deleteItem(deleteBtn.id));