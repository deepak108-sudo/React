
function Search({value,setValue,handleClick}) {
  return (
    <div className="flex justify-center items-center ">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Type" className="outline-none focus:ring-2 focus:ring-blue-500 mt-2 border border-blue-200 px-4 py-2 m-2 rounded-2xl"></input>
        <button onClick={handleClick} className="bg-teal-500 p-2 rounded-xl text-white font-bold">Search</button>
    </div>
  )
}

export default Search