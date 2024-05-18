const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(heading);
console.log(root.render(heading));
const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, [
React.createElement("h1", {id: "heading"}, "I am child of child H1"), 
React.createElement("h2", {id: "heading2"}, "I am child of child H2")],
), React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {id: "heading"}, "I am child of child H1"), 
    React.createElement("h2", {id: "heading2"}, "I am child of child H2")]))
root.render(parent)


//ReactElement(OBJECT) = HTML (Browser Understand)