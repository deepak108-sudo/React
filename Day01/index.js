const element=React.createElement('h1',{},"Deepak");
const element1=React.createElement('h1',{},"Let's go");

const div=React.createElement('div',{},[element,element1]);

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

//Here old data got erased and new data will showed up: its react property so we created div and insert into that as al child and insert.
//--- Because React implementation in that way.
Reactroot.render(div);
//Reactroot.render(element1);