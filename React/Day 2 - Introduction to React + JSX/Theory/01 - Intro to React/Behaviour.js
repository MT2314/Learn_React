// ? Function Hello => Returns "Hello World"
function Hello() {
  return <h1>Hello World!</h1>;
}
function Goodbye() {
  return <h1>Goodbye World!</h1>;
}
// ? ReactDOM.render() is a fancy React function that that our React elements/components
// ? and renders them on the page
ReactDOM.render([<Hello />, <Goodbye />], document.getElementById("root"));
