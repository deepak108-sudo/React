//Create element through JS

// const header1=document.createElement('h1');
// header1.innerText="Hello Sonpari";
// header1.style.backgroundColor="pink";
// header1.style.fontSize='30px';
// header1.style.color='black';

// //Header2
// const header2=document.createElement('h2');
// header2.innerHTML="Hello deepak";
// header2.style.backgroundColor="blue";
// header2.style.fontSize='30px'


// const root=document.getElementById('root');
// root.append(header1);
// root.append(header2);

const React={
    createElement: function(tag,styles,text){
        const element=document.createElement(tag);

        if(Array.isArray(text)){
            for(let child of text){
                element.append(child)
            }
        }
        else
            element.innerText=text;

        //Apply the style in the element
        for(let key in styles){
            element.style[key]=styles[key];
        }
        return element;
    }
}

const ReactDOM={
    render: function(element,root){
        root.append(element);
    }
}

//Now only call
const header1=React.createElement('h1',{backgroundColor:'pink',fontSize:'30px', color:'white'},"Hello Sonpari");

const header2=React.createElement('h2',{backgroundColor:'black',fontSize:'30px', color:'white'},"Hello Deepak");

//list
const li1=React.createElement('li',{},'OSHO');
const li2=React.createElement('li',{},'Nitsche');
const li3=React.createElement('li',{},'Kamu');

const UL=React.createElement('ul',{},[li1,li2,li3]);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));