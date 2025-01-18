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
  return (
    <div>
      <h1>간단한 카운터</h1>
      <div>
        <button onclick={handleDecrement}>-</button>
        <span style="margin: 0 10px; font-size: 20px;">{count}</span>
        <button onclick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

// 앱 렌더링 함수
function renderApp() {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  render(App(), rootElement);
}

// 초기 렌더링
renderApp();