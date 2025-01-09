// 1단계, Virtual DOM 생성

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: { nodeValue: text, children: [] },
  };
}

// 사용 예시
// const element = createElement("h1", { id: "title" }, "Hello, world!");
// console.dir(element, { depth: null });
