import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

// Password:ABCDkfdf , setPassword()
// length:10, setLength(19)
//numberChange:false, setNumberChange()
//characterChange:false, setNumberChange()

function PasswordGenerator(){
    const [password,setPassword]=useState("ABCHFDAFSA");
    const [length,setLength]=useState(10);
    const [numberChange,setNumberChange]=useState(false);
    const [CharacterChange,setCharacterChange]=useState(false);

    console.log(password); 
    console.log(length);
    console.log(numberChange);
    console.log(CharacterChange);

    const generatePassword=useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV";

        if(numberChange)
            str+="0123456789"
        if(CharacterChange)
            str+="!@#$%^&*()+~`><?{}|:+-/*."

        let pass=""
        for(let i=0;i<10;i++){
            pass+=str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);
    },[length,numberChange,CharacterChange])
    
    useEffect(()=>{

        generatePassword()
    },[length,numberChange,CharacterChange])
    
    return (
        <div className="container">
            <h1>{password}</h1>
            <div className="inner">
                <div className="range-group">
                    <input type="range" min={5} mx={50}value={length}  onChange={(e)=>setLength(e.target.value)}></input>
                    <label>Length is: {length}</label>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" onChange={(e)=>setNumberChange(!numberChange)}></input>
                    <label>Include Number</label>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" onChange={(e)=>setCharacterChange(!CharacterChange)}></input>
                    <label>Include Special Character</label> 
                </div>
            </div>
        </div>
    )
}

const rootR=ReactDOM.createRoot(document.getElementById("root"));
rootR.render(<PasswordGenerator/>);