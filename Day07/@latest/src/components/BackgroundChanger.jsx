import React,{useEffect, useState} from 'react';

function BackgroundChanger({name}){
    const [bg,setBg] = useState("white");

    console.log("render");
    console.log(name);

    useEffect(()=>{
        console.log("useEffect ");
        document.body.style.backgroundColor=bg;
    },[bg]);

        return (
        <>
            <div className='flex justify-center min-h-screen items-center flex-col'>
                <h1 className='text-4xl font-bold mb-5'>Background Changer</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <button onClick={()=>setBg("red")} className='btn bg-red-600'>Red</button>
                    <button onClick={()=>setBg("green")}className='btn bg-green-600'>Grreen</button>
                    <button onClick={()=>setBg("yellow")} className='btn bg-yellow-500'>Yellow</button>
                    <button onClick={()=>setBg("blue")}className='btn bg-blue-600'>Blue</button>
                    <button onClick={()=>setBg("pink")}className='btn bg-pink-500'>Pink</button>
                    <button onClick={()=>setBg("teal")} className='btn bg-teal-500'>Teal</button>
                </div>
            </div>
        </>
    )
}

export default React.memo(BackgroundChanger);