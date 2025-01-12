// 3단계, 실제 DOM 업데이트 로직(reconcile 함수)

import { render } from "./render.js";
function updateDom(dom, prevProps, nextProps) {
  // 기존 속성 제거
  Object.keys(prevProps).filter(name => name !== "children").forEach(name => {
    if (!(name in nextProps)) {
      dom[name] = "";
    }
  });

  // 새 속성 추가
  Object.keys(nextProps).filter(name => name !== "children").forEach(name => {
    dom[name] = nextProps[name];
  });
}
export function reconcile(parent, oldVNode, newVNode) {
  console.log("=== Reconciliation Start ===");
  console.log("Parent:", parent);
  console.log("Old VNode:", oldVNode);
  console.log("New VNode:", newVNode);
  if (!oldVNode) {
    console.log("📌 Adding new node");
    render(newVNode, parent);
  } else if (!newVNode) {
    console.log("🗑️ Removing old node");
    parent.removeChild(parent.childNodes[0]);
  } else if (oldVNode.type !== newVNode.type) {
    console.log("🔄 Replacing node");
    console.log("Old type:", oldVNode.type);
    console.log("New type:", newVNode.type);
    parent.replaceChild(render(newVNode, document.createElement(newVNode.type)), parent.childNodes[0]);
  } else {
    console.log("✏️ Updating node properties");
    updateDom(parent.firstChild, oldVNode.props, newVNode.props);

    // 자식 노드 재귀 처리
    const maxLength = Math.max(oldVNode.props.children.length, newVNode.props.children.length);
    console.log(`👶 Processing ${maxLength} children`);
    for (let i = 0; i < maxLength; i++) {
      console.log(`Child ${i + 1}/${maxLength}`);
      reconcile(parent.firstChild, oldVNode.props.children[i], newVNode.props.children[i]);
    }
  }
  console.log("=== Reconciliation End ===\n");
}