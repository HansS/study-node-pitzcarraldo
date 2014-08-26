# nodemon 설치
* 서버를 구동한 상태에서 실시간으로 변경 사항을 반양할 수 있는 보조 모듈
* 설치 : (리눅스나 osx일 경우 sudo) npm install -g nodemon
* 실행 : nodemon app.js

# Express 실행시켜보기

# 예제 설명

* [bin/www](bin/www)
 * 서버를 구동시키는 스크립트 파일 (like Catalina.sh in tomcat)
 * 서버 구동시 node bin/www or nodemon bin/www
* [app.js](app.js)
 * Express를 초기화 시키고 각종 설정 및 미들웨어를 세팅
* public/view
 * public : js/css 등의 리소스 파일들
 * view : View Template 파일들(mustache)
* [routes](routes)
 * 각 URL별 액션이 정의 된 모듈 (like Controller)
* [routes/users.js](routes/users.js)
 * req, res의 다양한 기능을 확인해볼 수 있는 예제

# 실습 방법
* app.js의 주석을 참고하여 다양한 미들웨어를 설정 해보기.
* 미들웨어가 설정된 순서대로 동작하는지 확인해보기.
* [Express 4.x API](http://expressjs.kr/4x/api.html) 문서를 참고하여 req,res의 다양한 기능을 테스트해보기.
