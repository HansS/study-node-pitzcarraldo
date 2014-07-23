# Callback 함수 사용해보기

# 예제 설명

* [Callback](callback.js)
 * Callback과 request 모듈을 이용하여 http get request를 날려보기
 * Callback1에 setTimeout이 5초 설정 되어 있어, callback2가 나중에 실행되더라도 결과는 먼저 노출 됨.
* [NestedCallback](nestedCallback.js)
 * Callback의 결과 값을 이용해 다시 Callback을 날려야 할 경우 중첩해서 Callback 함수를 작성해야 함.
* [PreDefinedCallback](preDefinedCallback.js)
 * 중첩 Callback의 가독성을 위해서 Callback을 미리 선언한다.
