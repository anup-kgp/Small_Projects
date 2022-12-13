document.querySelector("form").addEventListener("submit",todoApp)
let taskArr
if(localStorage.getItem("todoList")==null){
    taskArr=[];
}else{
    taskArr=JSON.parse(localStorage.getItem("todoList"));
}
//console.log(taskArr)
displayTable(taskArr)

function todoApp(event){
    event.preventDefault();
    let taskName=document.querySelector("#task").value;
    let priority=document.querySelector("#priority").value;

    let taskObj={
        task:taskName,
        prior:priority,
    };
     taskArr.push(taskObj);
     localStorage.setItem("todoList",JSON.stringify(taskArr))
     displayTable(taskArr);
     
}
function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    console.log(taskArr.length);
    taskArr.forEach(function(el){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=el.task;
        let col2=document.createElement("td");
        col2.innerText=el.prior;
        if(el.prior=="High"){
            col2.style.backgroundColor="red";
        }else{
            col2.style.backgroundColor="green"
        }
        let col3=document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function(el,index){
            delRow(el,index)
        });
        col3.style.color=="red";
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);
    });
}
function delRow(el,index){
  // console.log(el);
   taskArr.splice(index,1);
   localStorage.setItem("todoList",JSON.stringify(taskArr))
   displayTable(taskArr)
}

alert("Hello")