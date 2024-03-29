// Two Steps for create React App from scratch

// 1. Create the element using React Library // Tag, class(Prop), Content(Children)
// 2. Target the root element in the html we our create element will get inserted using ReactDOM

// const rootElement = document.getElementById("root");// This is be used by ReactDOM

// const el = React.createElement("h1", {className: "container"}, "hello world")
// const el = React.createElement(<h1>hello world</h1>)

// function helloWorld () {
//     // in react class is a reserved keyword since it is used to create class based component
//     // so css class are defined using the word className not class in React
//     return React.createElement("h1", {className: "heading"}, "hello world");
// }

// JSX

// function HelloWorld() {
//     return <h1 className="heading">Hello World</h1>
// }

// ReactDOM.createRoot(rootElement).render(el);
// ReactDOM.createRoot(rootElement).render(<HelloWorld/>);

// Components hum Uppercase se start karte hain taki JSX ko pata chale ki ye element hamara khudka banaya hua hain ya wo ek in-built element hain like html tags (h1, p, div , article, main, etc.)

// Babel transpiles(converts) JSX syntax to the only React syntax which React understands

// Babel converts "<h1 className="heading">Hello World</h1>" =>  React.createElement("h1", {className: "heading"}, "hello world");


// Now bar bar React.createElement use karke tag, class, content define karna bohot tedious ho jata hain
// Isliye hum use karenge JSX

// JSX use karne ke liye babel ka configuration hona aawasak hota hain

// JSX ki ijjat kiu karna chahiye ???
// Answer Whenever you see this question in screen || in your mind


// Things to Remember 

// 1. React 
// 2. ReactDOM
// 3. JSX (Babel) // script => type="text/jsx"


// Using babel 

// All the above things are achieveble using just one Line
ReactDOM.createRoot(document.getElementById("root")).render(<p>HelloWorld</p>); 

// By Creating Component

// function HelloWorld(){
//     return <h1 className="heading">HelloWorld</h1>
// }
// ReactDOM.createRoot(document.getElementById("root")).render(<HelloWorld/>)