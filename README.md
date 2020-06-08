# 간단한 카운터앱 만들고 파일 분리하기 과제

![count mov](https://user-images.githubusercontent.com/14071105/83971931-9e65c380-a918-11ea-8b89-6664960e5300.gif)

간단한 카운터앱을 만들어 주세요! 단 이번 과제에서는 각 컴포넌트 마다 각 파일로 분리해주세요. 즉 하나의 파일에는 하나의 컴포넌트만 있어야 합니다.  

만약 하나의 파일에 모든 컴포넌트가 있으면, 내가 카운터를 고치고 싶어도 `index.js`를 수정하고 버튼을 수정하고 싶어도 `index.js`파일에 접근해야 하니 불편하겠죠? 그리고 코드가 너무 길어서 내가 보고 싶은 코드가 어디 있는지 찾기도 어렵습니다!

## 기능

* `Click me!`를 클릭하면 숫자가 1씩 증가합니다.
* 숫자 1 버튼을 누르면 숫자가 1씩 증가합니다.
* 숫자 2 버튼을 누르면 숫자가 2씩 증가합니다.
* 숫자 3 버튼을 누르면 숫자가 3씩 증가합니다.
* 숫자 4 버튼을 누르면 숫자가 4씩 증가합니다.
* 숫자 5 버튼을 누르면 숫자가 5씩 증가합니다.

## 제한 조건

* `if`는 사용할 수 있어도 `else` 사용하실 수 없습니다. `GuardClauses` 방법을 사용해주세요.
* `switch`는 사용하실 수 없습니다.
* `let`은 사용하실 수 없습니다. `const`만을 사용하여 문제를 해결해주세요.
* 함수 이름과 변수 이름에 줄임말은 사용하실 수 없습니다. 길더라도 명확하게 써주세요.
* indent(인덴트, 들여쓰기) depth를 1로 유지해주세요.
예를 들어, for문 안에 if문이 있으면 indent depth는 2입니다.
depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 됩니다.

## 설치하기

```bash
npm install
```

## 실행하기

```bash
npm start
```

자동으로 브라우저가 켜지지는 않으니 브라우저에 `http://localhost:8080`을 입력하여 접속해 주세요.  

만약 현재 컴퓨터에서 이미 `8080`이라는 포트를 사용하고 있다면 `8081`으로 실행이 될 수도 있어요. 만약 `8081`도 사용하고 있으면 `8082`, `8083` ... 순서대로 찾아서 만들어집니다.

## 린트 실행하기

```bash
npm run lint
```

## 테스트 실행하기

```bash
npm test
```

## Simple Counter Todo List
- [X] 'Counter'를 웹페이지에서 볼 수 있다.
- [X] 'Click me! ({숫자})'를 웹페이지에서 볼 수 있다.
- [ ] 1,2,3,4,5가 적힌 버튼 다섯개를 웹페이지에서 볼 수 있다.
- [X] 'Click me!'를 누르면 괄호 안의 숫자가 1씩 증가한다.
- [ ] 1,2,3,4,5 숫자 버튼을 누르면 적힌 숫자 만큼 'Clicke me!' 버튼 내 괄호 안의 숫자가 증가한다.
