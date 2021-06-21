const addBtn=document.querySelector("#add");
const input=document.querySelector("#list-input")
const displayTable=document.querySelector("#list-table")
const deleteBtn=document.querySelector(".delete-btn")
const filterBtn=document.querySelector("#filter");

const list=[];


function addToList()
{
    //console.log("clicked");
    let newtask={
        title:input.value,
        checked:false,
        id:Date.now()
    }
    list.unshift(newtask)
    input.value="";
    input.focus()
    displayList(list);
}


function displayList(listToDisplay)
{
    
    let tableList=listToDisplay.map(task=>renderListItem(task))

    console.table(tableList)
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
    displayList(list)

}

function changeCheck(itemToChange)
{
    console.log("Checked clicked");
    //console.log(itemToChange)
    //let updated=list.map(item=>item.id==itemToChange?item.checked=true:item.checked=false) 
    let indexInList=list.findIndex(item=>item.id==itemToChange);
    list[indexInList].checked=true;
    //console.log(list)
 
}

function filterTask(filterType)
{   
    // let filteredList=list.filter(item=>item.checked===true);
    // console.log(filteredList)
    // displayList(filteredList);
    console.log(filterType);
    switch(filterType)
    {
        case "completed":
            let completedTask=list.filter(item=>item.checked===true);
            displayList(completedTask)
            break;
        case "in-progress":
            let inProgressTask=list.filter(item=>item.checked===false);
            displayList(inProgressTask)
            break;
        case "all":
            //let allTask=list.filter(item=>item.checked===false);
            displayList(list)
            break;
        default:
            displayList(list)
    }

}

function renderListItem(itemToRender)
{
    return `<li>${itemToRender.title}</li>
    <button class="delete-btn" id=${itemToRender.id} onclick=deleteItem(${itemToRender.id})>X</button>
    <button class="checked-btn" id=${itemToRender.id} onclick=changeCheck(${itemToRender.id})>Check</button>`
}



addBtn.addEventListener("click",addToList)
//deleteBtn.addEventListener("click",deleteItem(deleteBtn.id));
//filterBtn.addEventListener("click",filterTask)
filterBtn.addEventListener("change",function(){filterTask(this.value)})