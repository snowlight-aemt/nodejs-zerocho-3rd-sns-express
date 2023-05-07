# 설정하기

## .env 설정 파일 
```
COOKIE_SECRET=
KAKAO_ID=
```

## TDD
### 단위 테스트를 위한 jest

### 통합 테스트를 위한 supertest
* auth.test.js

## 테스트 데이터베이스 설정

```
npx sequelize db:create --env test
```

## 파일 구조 대한 정리

```
middlewares
passport
app.js
 > routers (auth, page, post)
  > controllers (auth, page)
views
public
models
```

TODO
* middlewares 란 무엇인가?

## Fork Url
https://github.com/ZeroCho/nodejs-book
https://www.youtube.com/@ZeroChoTV
