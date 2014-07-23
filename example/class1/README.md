# CommonJS 모듈 만들어보기

* git clone
* IntelliJ > Open > 폴더 선택
* 실행 : 터미널에서 node app.js 

# 예제 설명

* ObjectStyle
 * Json Object 형태로 한번에 묶어서 모듈 만들기
* SeperatedStyle
 * module.exports.name 형태로 모듈에 직접 변수/함수 설정하기
* MixedStyle
 * ObjectStyle + SeperatedStyle
* FunctionStyle
 * 생성자를 받을 수 있게 function 으로 모듈 만들기
* FunctionStyleWithTwoParameter
 * JavaScript의 Function은 파라메터를 모두 넘기지 않아도 잘 동작 합니다.
 * 순서대로 값을 전달 받으며 없는 값은 undefiend 상태가 됩니다.
