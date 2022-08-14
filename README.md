# React with Redux, Next.js, TypeScript

- React Native 웹 앱의 성능을 향상시키는 법
- JavaScript의 장점을 극대화하는 React 개발 방법론
- React 심화 개념 (useCallback, useMemo, useReducer, etc)
- React hooks, 상태 관리 (Redux, Context API), Next.js, TypeScript
- 네트워크, SPA, TDD
- 프론트엔드 웹 개발 실무를 경함하기 위한 프로젝트 학습

[udemy's course](https://www.udemy.com/course/best-react/)

## react-complete-guide

---

```
npx create-react-app react-complete-guide
cd react-complete-guide
npm start
```

```
localhost:3000
```

---

### React.createElement(arg)

return 시, 하나의 매개변수로 반환해야 하기 때문에 아래와 같은 방법으로 묶음

1. `<Wrapper>`라는 `components` 생성 후 `<Wrapper>Contents</Wrapper>`
2. `<>Contents</>`
3. `<React.Fragment>Contents</React.Fragment>`

### ReactDOM.createPortal(reactElement, domElement)

root DOM 트리를 벗어나 다른 DOM에서 어플리케이션의 일부분을 그릴 수 있음

1. `index.html`에 <div id="test-root">
2. `import ReactDom from "react-dom";`
3. `{ReactDOM.createPortal(<Test />, document.getElementById("test-root"))}`

### useEffect

```
useEffect(() => {}, [dependencies])
```
