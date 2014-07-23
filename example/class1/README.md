# CommonJS 모듈 만들어보기

* git clone
* IntelliJ > Open > 폴더 선택
* 실행 : 터미널에서 node app.js 

# 예제 설명

* [ObjectStyle](lib/objectStyle.js)
 * Json Object 형태로 한번에 묶어서 모듈 만들기
 * var that = module.exports 로 내부 요소에 접근한 부분에 주목
  * Javascript에서 this는 이상하게 동작합니다. <- 언어 설계의 미스
  * [this의 동작 원리](http://bonsaiden.github.io/JavaScript-Garden/ko/#function.this)
* [SeperatedStyle](lib/seperatedStyle.js)
 * module.exports.name 형태로 모듈에 직접 변수/함수 설정하기
* [MixedStyle](lib/mixedStyle.js)
 * ObjectStyle + SeperatedStyle
* [FunctionStyle](lib/functionStyle.js)
 * 생성자를 받을 수 있게 function 으로 모듈 만들기
* [FunctionStyleWithTwoParameter](lib/functionStyle.js)
 * JavaScript의 Function은 파라메터를 모두 넘기지 않아도 잘 동작 합니다.
 * 순서대로 값을 전달 받으며 없는 값은 undefiend 상태가 됩니다.
