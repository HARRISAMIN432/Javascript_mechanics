/*
  event_propagation.js
  ---------------------------------------------
  Complete Guide to Event Propagation in JavaScript
  ---------------------------------------------

  Topics covered:
  1. What is event propagation?
  2. Event bubbling
  3. Event capturing (trickling)
  4. Event target
  5. stopPropagation()
  6. stopImmediatePropagation()
  7. preventDefault()
  8. Event delegation
  9. addEventListener options
*/

/*************************************************
 * 1. What is Event Propagation?
 *************************************************/

// In JavaScript, events move through the DOM tree
// in a specific order when triggered.

// There are 3 phases:
// 1. Capturing phase (top → target)
// 2. Target phase (at element)
// 3. Bubbling phase (target → top)

/*************************************************
 * Example HTML structure (for understanding)
 *************************************************/

/*
<div id="grandparent">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</div>
*/

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

/*************************************************
 * 2. Event Bubbling (default behavior)
 *************************************************/

// Events bubble from target → parent → root

child.addEventListener("click", () => {
  console.log("Child clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent clicked");
});

// Output when clicking child:
// Child clicked
// Parent clicked
// Grandparent clicked

/*************************************************
 * 3. Event Capturing (Trickling)
 *************************************************/

// Capturing happens BEFORE reaching the target

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent (capture)");
  },
  true,
); // true = capture phase

parent.addEventListener(
  "click",
  () => {
    console.log("Parent (capture)");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("Child (capture)");
  },
  true,
);

// Order in capture phase:
// Grandparent → Parent → Child

/*************************************************
 * 4. Event Target
 *************************************************/

child.addEventListener("click", (event) => {
  console.log("Target element:", event.target);
  console.log("Current element:", event.currentTarget);
});

// event.target = actual clicked element
// event.currentTarget = element handling event

/*************************************************
 * 5. stopPropagation()
 *************************************************/

child.addEventListener("click", (event) => {
  console.log("Child clicked only");
  event.stopPropagation(); // stops bubbling
});

parent.addEventListener("click", () => {
  console.log("Parent will NOT run if propagation stopped");
});

/*************************************************
 * 6. stopImmediatePropagation()
 *************************************************/

child.addEventListener("click", (event) => {
  console.log("Handler 1");
  event.stopImmediatePropagation();
});

child.addEventListener("click", () => {
  console.log("Handler 2 will NOT run");
});

// Stops all other listeners on same element

/*************************************************
 * 7. preventDefault()
 *************************************************/

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault(); // stops navigation
  console.log("Link click prevented");
});

/*************************************************
 * 8. Event Delegation (VERY IMPORTANT)
 *************************************************/

// Instead of adding listeners to many children,
// add one listener to parent

const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked item:", event.target.textContent);
  }
});

// Works even for dynamically added <li>

/*************************************************
 * 9. addEventListener Options
 *************************************************/

child.addEventListener(
  "click",
  () => {
    console.log("Once only listener");
  },
  {
    once: true, // runs only once
  },
);

child.addEventListener(
  "scroll",
  () => {
    console.log("Passive listener");
  },
  {
    passive: true, // improves performance
  },
);

/*************************************************
 * KEY TAKEAWAYS
 *************************************************/

/*
- Events flow in 3 phases: capturing → target → bubbling
- Bubbling is default behavior
- Capturing happens first if enabled
- stopPropagation stops event flow
- stopImmediatePropagation stops all handlers
- preventDefault stops browser default behavior
- Event delegation improves performance
*/
