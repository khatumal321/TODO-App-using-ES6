addWork= () =>  {
    let text = document.getElementById("input1").value;
    if(text === "") {
        alert("Please Enter text");
    }


    let div2 = document.createElement(`div`);
    let ul = document.createElement(`ul`);
    let li =  document.createElement(`li`);
    li.setAttribute(`id` ,text);
    let createText2 = document.createTextNode(text);
    li.appendChild(createText2);
    ul.appendChild(li);
    div2.appendChild(ul);
    mainDiv.appendChild(div2);  
    let btn2 = document.createElement(`input`);
    btn2.setAttribute(`type` , `button`);
    btn2.setAttribute(`value` , `Delete`);
    btn2.setAttribute(`id` , `input3`);
    li.appendChild(btn2);

    let btn3 = document.createElement(`input`);
    btn3.setAttribute(`type` , `button`);
    btn3.setAttribute(`value` , "Edit");
    btn3.setAttribute(`id` , `input4`);
    li.appendChild(btn3);
    
    
    let data = localStorage.getItem("user");
    if(data === null) {
        data = [];

    }
    else{
        data = JSON.parse(data);
    }
    data.push(text);
    localStorage.setItem('user', JSON.stringify(data))


    btn2.addEventListener(`click`,  ()=> {
        btn2.parentNode.remove();
        console.log(li.id);
        let getNew = localStorage.getItem("user");
        getNew = JSON.parse(getNew);
        for(let i = 0; i < getNew.length; i++) {
            if(li.id === getNew[i]){
               getNew.splice(i,1);
               localStorage.setItem("user",JSON.stringify(getNew));
            }  
        }
        })
        //edit function
        btn3.addEventListener(`click`, function () {
        let li1 = this.parentNode;
        console.log("li",li1);
        let text1 = prompt("enter value",li1.id)
        li1.innerText = text1;
        li1.appendChild(btn2);
        li1.appendChild(btn3);
        let getNew1 = localStorage.getItem("user");
        getNew1 = JSON.parse(getNew1);
        for(let j = 0; j < getNew1.length; j++){
            if(li1.id === getNew1[j]){
                getNew1.splice(j,1,text1);
                localStorage.setItem("user",JSON.stringify(getNew1));
                li.setAttribute(`id` ,text1);

            }
        }
        
        })
        document.getElementById("input1").value = "";
}





