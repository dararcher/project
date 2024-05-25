 // ReactDOM.render(React.createElement('input',{
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMousEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"))

const inputClick = () => console.log("clicked")
const MouseOver = () => console.log("Mouse Over")

const helpText = "help text!?"

const elements = (<div className="name">
    <h1>{helpText}</h1>
<input placeholder={helpText} 
    onClick={inputClick} 
    onMousEnter={MouseOver} />
    <p>{helpText == "help text!?" ? "Yes" : "No" }</p>
    </div>)
const app = document.getElementById("app")

ReactDOM.render(elements, app)