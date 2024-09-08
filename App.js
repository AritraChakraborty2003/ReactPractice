import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "This is my book"
);

const root = ReactDOM.createRoot(rootElement);

root.render(heading);

/*    Very complicated to write the frontend code using React and
    ReactDOM so here jsx comes to play making it easier to code
    and manage the code.



const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    "I am the parent",
    React.createElement(
      "div",
      { id: "grand_child1" },
      "This is grand child 1 from 1!!!"
    ),
    React.createElement(
      "div",
      { id: "grand_child2" },
      "This is grand Child 2 from 1!!!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "div",
      { id: "grand_child11" },
      "This is grand child 1 from 2!!!"
    ),
    React.createElement(
      "div",
      { id: "grand_child21" },
      "This is grand child 2 from child 2!!!"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
