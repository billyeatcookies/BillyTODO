function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      tasks: ['Welcome'] });_defineProperty(this, "handleSubmit",


    task => {
      this.setState({ tasks: [...this.state.tasks, task] });
    });_defineProperty(this, "handleDelete",

    index => {
      const newArr = [...this.state.tasks];
      newArr.splice(index, 1);
      this.setState({ tasks: newArr });
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { className: "card frame" }, /*#__PURE__*/
      React.createElement(Header, { numTodos: this.state.tasks.length }), /*#__PURE__*/
      React.createElement(TodoList, { tasks: this.state.tasks, onDelete: this.handleDelete }), /*#__PURE__*/
      React.createElement(SubmitForm, { onFormSubmit: this.handleSubmit }))));



  }}



class SubmitForm extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { term: '' });_defineProperty(this, "handleSubmit",

    e => {
      e.preventDefault();
      if (this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        className: "input",
        placeholder: "Enter Item",
        value: this.state.term,
        onChange: e => this.setState({ term: e.target.value }) }), /*#__PURE__*/

      React.createElement("button", { className: "button" }, "Submit")));


  }}



const Header = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "card-header" }, /*#__PURE__*/
    React.createElement("h1", { className: "card-header-title header" }, "You have ",
    props.numTodos, " Todos")));



};


const TodoList = props => {
  const todos = props.tasks.map((todo, index) => {
    return /*#__PURE__*/React.createElement(Todo, { content: todo, key: index, id: index, onDelete: props.onDelete });
  });
  return /*#__PURE__*/(
    React.createElement("div", { className: "list-wrapper" },
    todos));


};

const Todo = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "list-item" },
    props.content, /*#__PURE__*/
    React.createElement("button", { class: "delete is-pulled-right", onClick: () => {props.onDelete(props.id);} })));


};

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.querySelector('#root'));