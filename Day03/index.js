import React from 'react';
import ReactDOM from 'react-dom/client'

const name="Deepak";
const obj={
    name:"Kapil",
    age:23,
    city:"hbag"
}

const obj2={
    backgroundColor:"yellow",
    color:"red"
}

const newEle=(
    <>
        <h1 id="first" className='second'>Hello my Friend</h1>
        <h2 money={23} style={obj2}>mza aaya {name} {obj.age}</h2>
    </>
)
//{used { } on style because it want object  second one because i am entering object of javascript}
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newEle);

//React Component
//Function Based Component     ==> Functin bna diya

function greet(){
    return <h1>Hello dear</h1>
}

function meet(){
    return <h2>Let meet</h2>
}

const newEle2=greet();
const newEle3=meet();
 Reactroot.render(greet()); //Reactroot.render(newEle2)

 //To call both function simultaneously
 const newElem4=<>
 {newEle2}
 {newEle3}
 </>

 Reactroot.render(newElem4);