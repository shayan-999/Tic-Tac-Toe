let boxes=document.querySelectorAll(".box");
let newGamebtn=document.querySelector(".btn-new");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");

let turnO=true;

const winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disablegame = () =>{
     for(let box of boxes){
      box.disabled=true;
    }
};

const enablegame = () =>{
     for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
         if(turnO){
    box.innerText="O";
    turnO=false;
 }
 else{
    box.innerText="X";
    turnO=true;
    }
    box.disabled=true;
   checkwinner();
});
});

const showwinner = (winner) =>{
    msg.innerText=`Congratulations , Winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkwinner = ()=>{
    for(let pattern of winningpatterns){
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;

           if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                disablegame();
                showwinner(pos1Val);
                return;
            }}}
    for(let box of boxes){
     if(box.innerText==""){
        return;
    }
};
msg.innerText = "It is Draw";
msgcontainer.classList.remove("hide");

};

const newGame = () =>{
     turnO=true;
     enablegame();
     msgcontainer.classList.add("hide");
};

newGamebtn.addEventListener("click", newGame);