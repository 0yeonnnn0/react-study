// 2단계, Virtual DOM을 실제 DOM으로 변환

// import { JSDOM } from "jsdom";

// // 가상 DOM 생성
// const { window } = new JSDOM(`<html><body><div id="root"></div></body></html>`);
// const { document } = window;

export function render(vNode, container) {
  const dom = vNode.type === "TEXT_ELEMENT" ? document.createTextNode(vNode.props.nodeValue) : document.createElement(vNode.type);
  Object.keys(vNode.props).filter(key => key !== "children").forEach(name => {
    dom[name] = vNode.props[name];
  });
  vNode.props.children.forEach(child => render(child, dom));
  container.appendChild(dom);

  // DOM 구조를 콘솔에 출력
  console.log("생성된 Virtual DOM 구조:");
  console.dir(vNode, {
    depth: null
  });
  console.log("\n실제 DOM 구조:");
  console.log(container.innerHTML);
}

// 사용 예시
// const vNode = createElement(
//   "div",
//   { id: "app" },
//   createElement("h1", null, "하이요 ㅋㅋ"),
//   createElement("p", { style: "color: blue;" }, "이건 문단이야 ㅋㅋ")
// );
// render(vNode, document.getElementById("root"));