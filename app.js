const mainHeading = document.createElement("h1");
mainHeading.innerHTML = "React Using JavaScript";

mainHeading.id = "mainHeading";
mainHeading.className = 'mainHeading';

const root = document.getElementById("root");

root.append(mainHeading);

// appendChild: Adds `newChild` to the end of `parent`
// append: Can append multiple Child or strings. If parent already has children, the new child is added after them.
// replaceChild: Replaces a child of an element
// replaceWith: Replaces the element itself