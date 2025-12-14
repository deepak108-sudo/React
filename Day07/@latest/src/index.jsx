import react, { useState } from "react";
import reactDOM from "react-dom/client";
import BackgroundChanger from "./components/BackgroundChanger";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-amber-600 flex justify-center flex-col items-center">
        <h1 className="text-white text-4xl font-bold mt-4">Counter: {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="p-2 border m-2 rounded-xl bg-blue-400 text-white shadow-md"
        >
          Incement
        </button>
      </div>
      <BackgroundChanger name="Monika" /> //Rendering again and again
    </>
  );
}

reactDOM.createRoot(document.getElementById("root")).render(<Counter />);
