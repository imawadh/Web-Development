function customRender(ReactElement,mainContainer){
    const ele = document.createElement(ReactElement.type);
    ele.setAttribute("href",ReactElement.props.href);
    ele.setAttribute("target",ReactElement.props.target);
    ele.textContent = ReactElement.children;
    console.log(ele);
    mainContainer.appendChild(ele);
}


const ReactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me visit google ..."
}


const mainContainer = document.querySelector("#root");

customRender(ReactElement,mainContainer);
