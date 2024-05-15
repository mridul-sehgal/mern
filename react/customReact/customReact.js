/*  ..... Version 1 code .....
function customRender(reactElement,container){
    const domELement=document.createElement(reactElement.type)
    domELement.innerHTML=reactElement.children;
    document.setAttribute('href',reactElement.props.href);
    document.setAttribute('target',reactElement.props.target);
    container.appendChild(domELement)
}
*/

function customRender(reactElement,container){
    const domELement=document.createElement(reactElement.type)
    domELement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        domELement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domELement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.getElementById("root")
customRender(reactElement,mainContainer) 