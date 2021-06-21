const addBtn=document.querySelector("#add");
const input=document.querySelector("#list-input")
const displayTable=document.querySelector("#list-table")
const deleteBtn=document.querySelector(".delete-btn")
const filterBtn=document.querySelector("#filter");
const priority=document.querySelector("#priority");
const count=document.querySelector("#count")

const list=[];


function addToList(taskName,prio)
{
    //console.log("clicked");
    let newtask={
        title:taskName,
        checked:false,
        priority:prio,
        id:Date.now()
    }
    list.unshift(newtask)
    input.value="";
    input.focus()
    displayList(list);
}

function getCountofTask_Yet_toComplete(list)
{
    let number= list.reduce((acc,item)=>item.checked==false?acc+1:acc,0)
    count.innerHTML=number
    
}

function displayList(listToDisplay)
{
    let tableList=listToDisplay.map(task=>renderListItem(task))
    console.table(tableList)
    displayTable.innerHTML=tableList.join("")
    getCountofTask_Yet_toComplete(list)
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
    getCountofTask_Yet_toComplete(list);
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

// function getPriority(priority)
// {
//     priority.addEventListener("change",()=>console.log(this.priority))
// }

//addBtn.addEventListener("click",addToList)
addBtn.addEventListener("click",()=>{addToList(input.value,priority.value)})
//deleteBtn.addEventListener("click",deleteItem(deleteBtn.id));
//filterBtn.addEventListener("click",filterTask)
filterBtn.addEventListener("change",function(){
    filterTask(this.value)
   // getCountofTask_Yet_toComplete(list)
})