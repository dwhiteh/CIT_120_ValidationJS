const pages=[
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page: "View",
        navigate: view

    }

]


function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation (){
    let nav=document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="100px";
    nav.style.backgroundColor="green";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate)
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML= "Home Page";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about = document.createElement("h1");
    about.innerHTML="About";
    document.body.querySelector(".wrapper").appendChild(about);
    let dale = document.createElement("h3");
    dale.innerHTML="Dale";
    document.body.querySelector(".wrapper").appendChild(dale);
}

function view(){
    let view = document.createElement("h1");
    view.innerHTML="View Notes";
    document.body.querySelector(".wrapper").appendChild(view);
    let inputEleNote = document.createElement("input");
    inputEleNote.placeholder="Enter Note: ";
    document.body.appendChild(inputEleNote);
    let inputEleImportance = document.createElement("input");
    inputEleImportance.placeholder="Enter Importance (number): ";
    document.body.appendChild(inputEleImportance);
    let viewButton = document.createElement("button");
    viewButton.innerHTML="Submit";
    document.body.appendChild(viewButton);
    let list=[];
    let inputListNote = document.createElement("div");
    function renderList(){
        inputListNote.innerHTML="";
        for(let i=0; i<list.length;i++){
            let ele = document.createElement("div");
            ele.innerHTML=list[i];
            inputListNote.appendChild(ele);
        }
    }
    viewButton.addEventListener("click", function() {
        if (inputEleNote.value <= 1 || isNaN(inputEleImportance.value)){
            alert("Note must be greater than 1 (one) character and Importance must be a number!")}
        else{
            list.push(inputEleNote.value+" "+inputEleImportance.value);
            renderList();
        }

    })
    document.body.appendChild(inputListNote);
}


let inputEle = document.createElement("input");
inputEle.placeholder="User Name: ";


let inputElePass = document.createElement("input");
inputElePass.placeholder="Password: ";
inputElePass.setAttribute("type", "password");

let messageEle = document.createElement("h3");

let button = document.createElement("button");
button.innerHTML="Log In";

button.addEventListener("click", function(){
    if(inputEle.value==="coolStudent123"){
        document.body.innerHTML="";
        navigation() && homePage()
    }
    else{
        messageEle.innerHTML="You entered the wrong login credentials!"
    }
})





document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);