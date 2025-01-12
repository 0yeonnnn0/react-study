import { createElement } from "./createElement.js";
import { reconcile } from "./updateDom.js";
import { JSDOM } from "jsdom";

// 가상 DOM 환경 생성
const { window } = new JSDOM(`<html><body><div id="root"></div></body></html>`);
const { document } = window;

// 초기 Virtual DOM
const oldVNode = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Hello, world!"),
  createElement("p", { style: "color: red;" }, "This is old content.")
);

// 변경된 Virtual DOM
const newVNode = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Hello, Virtual DOM!"),
  createElement("p", { style: "color: blue;" }, "This is updated content."),
  createElement(
    "button",
    { onclick: () => console.log("Clicked!") },
    "Click me!"
  )
);

// 실제 DOM 컨테이너 생성
const root = document.getElementById("root");

// 초기 렌더링
console.log("🌟 Initial Render");
reconcile(root, null, oldVNode);
console.log(root.outerHTML);

// 업데이트 렌더링
console.log("🌟 Updating DOM");
reconcile(root, oldVNode, newVNode);
console.log(root.outerHTML);
