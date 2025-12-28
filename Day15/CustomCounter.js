import { useDispatch, useSelector } from "react-redux"
import { customIncrement } from "./Slicer1";
import { useState } from "react";

export default function CustomCounter(){
    //let val=useSelector((state)=>state.slice1.val);
    const [val,setVal]=useState("");

    const dispatch=useDispatch();
    function handleSubmit(){
        if(val.trim()===""){
            alert("Please enter value");
            return;
        }
        let num=Number(val);
        setVal("");
        dispatch(customIncrement(num));
    }

    return (
        <>
            <input type="number" value={val} onChange={(e)=>setVal(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}