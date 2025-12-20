const style = document.createElement("style");
style.textContent = `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Inter,Segoe UI,Arial,sans-serif
}
body{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(135deg,#eef2ff,#f8fafc)
}
section{
  width:420px;
  background:#ffffff;
  border-radius:22px;
  padding:24px;
  box-shadow:0 25px 50px rgba(0,0,0,.12);
  animation:cardIn .5s ease
}
@keyframes cardIn{
  from{opacity:0;transform:translateY(20px) scale(.95)}
  to{opacity:1;transform:translateY(0) scale(1)}
}
h2{
  text-align:center;
  color:#111827;
  margin-bottom:18px;
  font-size:22px
}
input{
  width:100%;
  padding:13px 15px;
  border-radius:14px;
  border:1px solid #e5e7eb;
  outline:none;
  font-size:14px
}
input:focus{
  border-color:#6366f1;
  box-shadow:0 0 0 3px rgba(99,102,241,.2)
}
button{
  cursor:pointer;
  border:none;
  border-radius:14px;
  font-size:14px;
  transition:.25s ease
}
section>button{
  width:100%;
  margin-top:12px;
  padding:13px;
  background:linear-gradient(135deg,#6366f1,#4f46e5);
  color:#fff;
  font-weight:600
}
section>button:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 25px rgba(79,70,229,.35)
}
ul{
  list-style:none;
  margin-top:22px
}
li{
  background:#ffffff;
  border-radius:18px;
  padding:14px 16px;
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:14px;
  box-shadow:0 10px 20px rgba(0,0,0,.08);
  animation:itemIn .35s ease
}
@keyframes itemIn{
  from{opacity:0;transform:translateY(15px)}
  to{opacity:1;transform:translateY(0)}
}
li span{
  flex:1;
  font-size:14px;
  color:#1f2937;
  font-weight:500
}
li input{
  flex:1;
  padding:9px 10px;
  border-radius:10px;
  border:1px solid #d1d5db
}
li button{
  padding:7px 12px;
  font-size:13px;
  border-radius:10px
}
li button:nth-of-type(1){
  background:#facc15
}
li button:nth-of-type(1):hover{
  background:#eab308
}
li button:nth-of-type(2){
  background:#fecaca
}
li button:nth-of-type(2):hover{
  background:#fca5a5
}
li button.save{
  background:#86efac;
  color:#065f46;
  font-weight:600
}
li button.save:hover{
  background:#4ade80;
  box-shadow:0 8px 18px rgba(34,197,94,.4)
}
li.removing{
  animation:remove .35s forwards
}
@keyframes remove{
  to{opacity:0;transform:translateX(30px)}
}
`;
document.head.append(style);

let body = document.body;
let section = document.createElement("section");
let h2 = document.createElement("h2");
let input = document.createElement("input");
let btn_task = document.createElement("button");
let ul = document.createElement("ul");

h2.innerText = "To Do List";
input.placeholder = "Enter Any Task";
btn_task.innerText = "Add Task";

btn_task.addEventListener("click", ()=>{
  if(input.value.trim()==="") return alert("Please Enter Any Task");

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = input.value;

  let edit_btn = document.createElement("button");
  let del_btn = document.createElement("button");
  edit_btn.innerText = "Edit";
  del_btn.innerText = "Delete";

  edit_btn.addEventListener("click", ()=>{
    let editinput = document.createElement("input");
    editinput.value = span.innerText;

    let savebtn = document.createElement("button");
    savebtn.innerText = "Save";
    savebtn.className = "save";

    savebtn.addEventListener("click", ()=>{
      if(editinput.value.trim()=== ""){
        alert("Enter Any Statement Here...");
        
      }
      else{
         li.replaceChild(savebtn, edit_btn);
      }
    })

    li.replaceChild(editinput, span);
   

    savebtn.addEventListener("click", ()=>{
      span.innerText = editinput.value;
      li.replaceChild(span, editinput);
      li.replaceChild(edit_btn, savebtn);
    });
  });

  del_btn.addEventListener("click", ()=>{
    li.classList.add("removing");
    setTimeout(()=>li.remove(),350);
  });

  li.append(span,edit_btn,del_btn);
  ul.append(li);
  input.value="";
});

section.append(h2,input,btn_task,ul);
body.append(section);
