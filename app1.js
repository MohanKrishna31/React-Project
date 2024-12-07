import React from "react";
import ReactDOM from "react-dom/client";


const mainHeading1 = React.createElement("h1", { id: "mainHeading1", className: "mainHeading1" }, "React Using React");

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(mainHeading1);

// React Creates Elements in the form of objects. and While Rendering the root, it converts the object into html elements and place them in HTML Tags where the root is defined.

const tags = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "Child1" }, [React.createElement("h1", {}, "Child1 H1 Tag"), React.createElement("h2", {}, "Child1 H2 Tag"),]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Child2 H1 Tag"), React.createElement("h2", {}, "Child2 H2 Tag"),]),]);

const tagsRoot = ReactDOM.createRoot(document.getElementById("root2"));

tagsRoot.render(tags); 