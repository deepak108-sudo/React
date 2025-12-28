import react from "react"
import { createRoot } from "react-dom/client"
import Swiggy from "./swiggy";
import { Provider } from "react-redux";
import store from "./Store"
import Body from "./Body";


function App(){
    return <>
    <Provider store={store}>
        <Swiggy/>
    </Provider>
    </>
}

createRoot(document.getElementById("root")).render(<App/>);