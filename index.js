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
        completed:false,
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
    let number= list.reduce((acc,item)=>item.completed==false?acc+1:acc,0)
    count.innerHTML=number
    
    
    if(list.every(task=>task.completed==true))
    {
        alert("Congratulation ")
        //ASK if want to clear list
    }


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
    //ASK SURE QUESTION 
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
    console.log("change  clicked");
    let indexInList=list.findIndex(item=>item.id==itemToChange);
    if(list[indexInList].completed==false)
    {
        list[indexInList].completed=true;
    }
    else
    {
        list[indexInList].completed=false;
    }
    getCountofTask_Yet_toComplete(list)
}

function filterTask(filterType)
{   
    console.log(filterType);
    switch(filterType)
    {
        case "completed":
            let completedTask=list.filter(item=>item.completed===true);
            displayList(completedTask)
            break;
        case "in-progress":
            let inProgressTask=list.filter(item=>item.completed===false);
            displayList(inProgressTask)
            break;
        case "all":
            //let allTask=list.filter(item=>item.completed===false);
            displayList(list)
            break;
        default:
            displayList(list)
    }

}

function renderListItem(itemToRender)
{
    let checkbox=`<input type="checkbox" id="${itemToRender.id}" onclick=changeCheck(${itemToRender.id})>`
    if(itemToRender.completed==true)
    {
        checkbox=`<input type="checkbox" id="${itemToRender.id}" onclick=changeCheck(${itemToRender.id}) checked>`
    }
    return `<li>${itemToRender.title}</li>
    <button class="delete-btn" id=${itemToRender.id} onclick=deleteItem(${itemToRender.id})>X</button>
    ${checkbox}`
}


//addBtn.addEventListener("click",addToList)
addBtn.addEventListener("click",()=>{addToList(input.value,priority.value)})
filterBtn.addEventListener("change",function(){
    filterTask(this.value)
})