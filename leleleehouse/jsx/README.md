다현쓰 jsx 공부
https://youtu.be/37-o-5G9-9w?si=erltmGYzQGSqquLw 강의 내용 정리

1. # [리액트 초보/입문] 03-1강: JSX  
JSX는 리액트를 사용하여 개발할 때 거의 필수적으로 사용하게 된다.

---

## ✨ JSX란? 
먼저 자바스크립트를 줄여서 JS라고 많이 표기한다.
그럼 JSX는 자바스크립트와 관련이 있다고 볼 수 있다.
JSX의 풀네임은 A syntax extension to JavaScript 이다.
즉 자바스크립트의 확장 문법이라는 뜻
JSX는 자바스크립트와 xml, html을 합친것이라고 보면 된다.
> JSX = 자바스크립트 + XML/HTML  

간단한 예제
3_1_jsx.jsx

---

## 🔧 JSX의 역할
내부적으로 xml, html코드를 자바스크립트로 변환하는 과정을 거쳐줌
jsx코드를 자바스크립트 코드로 변환하는 역할이 리액트의 createElement라는 함수임

예시)

> jsx를 사용한 코드

```jsx
class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
)
```

> jsx를 사용하지 않은 코드

```jsx
class Hello extends React.Component {
    render(){
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, {toWhat : 'World'}, null) , 
    document.getElementById('root')
)
```
두 코드를 비교해 보면 Hello 컴포넌트 내부에서 jsx를 사용했던 부분이 createElement 함수로
대체된것을 확인할 수 있다.

즉, 리액트는 createElement 함수를 호출하여 자바스크립트로 변환해준다.
리액트는 이 객체들을 읽어서 돔을 만드는데 사용하고 항상 최신상태를 유지한다.

그렇다면 createElement 함수에는 어떤 파라미터가 들어갈까?
아래 코드는 createElement의 파라미터를 나타낸 것이다.

```jsx
React.createElement(
    type,
    [props],
    [...children]
)
```
첫번째 파라미터 type 은 element의 유형을 나타낸다.
html 태그가 올 수도 있고, 다른 리액트 컴포넌트가 올수도있다.

두번째 파라미터 props는 속성들이 들어간다.

세번째 파라미터는 children이다. 이는 현재 element가 포함하고 있는 자식 element라고 생각하면 된다. 

---


--> 리액트에서 jsx를 사용하는 것이 필수는 아니다. 직접 모든 코드를 createElement 함수를 이용하여 개발하면 되기 때문이다. 하지만 jsx를 사용하면 코드가 더 간결해지고 가독성이 좋아지기 때문에 jsx를 사용하는것ㅇ르 추천한다.


2. # [리액트 초보/입문] 03-2강: JSX의 장점

## ✨ 간결한 코드

> jsx를 사용한 코드

```jsx
<div>Hello, {name}</div>
```

> jsx를 사용하지 않은 코드

```jsx
React.createElement('div', null, `Hello, ${name}`);
```

딱 봐도 jsx의 코드가 더 간결하다.

## 📖 가독성이 좋아짐

> jsx를 사용한 코드

```jsx
<div>Hello, {name}</div>
```

> jsx를 사용하지 않은 코드

```jsx
React.createElement('div', null, `Hello, ${name}`);
```

jsx를 사용한 코드가 훨씬 코드의 의미를 잘 파악할 수 있다.
가독성은 유지보수에도 매우 중요하다. (버그 수정이 쉬워짐)

## 🤛 Injection Attacks 방어
Injection Attacks는 숫자나 문자를 입력하는 부분에 소스코드를 넣어, 그 소스코드가 실행되게 하는 해킹방법이다. 예를 들어서 아이디를 넣는 칸에 자바스크립트 코드를 넣었는데 그 코드가 실행되면 매우 문제이다. 

```jsx
const title = response.potentiallyMaliciousInput;

//이코드는 안전합니다.
const element = <h1>{title}</h1>;
```
기본적으로 리액트 돔은 랜더링하기 전에 임베딩 된 값을 모두 문자열로 바꾼다.
따라서 명시적으로 선언되지 않은 값은 괄호사이에 들어갈 수 없다.
이는 XSS라고 불리는 크로스 사이트 스크립팅을 방어할 수 있다.

## 🦯 JSX 사용법
JSX는 자바스크립트 문법을 확장시킨것이기 때문에 모든 자바스크립트 문법을 지원한다.
여기서 추가로 XML과 HTML을 섞어서 사용하면 된다.

```jsx
const name = '다현';
const element = <h1> 안녕, {name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);
```
이렇게 xml과 html을 섞어서 사용하면 된다.
xml, html 코드를 사용하다가 중간에 javascript 코드를 사용하고 싶다면 중괄호를 써서 묶어주면 된다.

그럼 html의 중간이 아닌 태그 속성에 javascript를 사용하고 싶다면?
(1)큰따옴표사이에 문자열을 넣거나 (2)중괄호 사이에 자바스크립트 코드를 넣으면 된다.

'''jsx
//(1)
const element  = <div tabIndex = "0"></div>;
//(2)
const element  = <img srx = {user.avatarUrl}></img>;
'''

자식을 정의하는 방법은
평소 html을 사용하듯이 상위 태그가 하위태그를 둘러싸도록 하면 자연스럽게 children이 정의된다.

3. # [리액트 초보/입문] 03-3강: JSX 실습
-> /Users/idahyeon/Desktop/react_study_25/leleleehouse/jsx/myapp
