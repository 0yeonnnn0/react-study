import { createElement } from "./createElement.js";
import { render } from "./render.js";

// 상태 값
let count = 0;

// 이벤트 핸들러
function handleIncrement() {
  count += 1;
  renderApp();
}
function handleDecrement() {
  count -= 1;
  renderApp();
}

// App 컴포넌트
function App() {
  return createElement("div", null, createElement("h1", null, "\uAC04\uB2E8\uD55C \uCE74\uC6B4\uD130"), createElement("div", null, createElement("button", {
    onclick: handleDecrement
  }, "-"), createElement("span", {
    style: "margin: 0 10px; font-size: 20px;"
  }, count), createElement("button", {
    onclick: handleIncrement
  }, "+")));
}

// 앱 렌더링 함수
function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  render(App(), rootElement);
}

// 초기 렌더링
renderApp();