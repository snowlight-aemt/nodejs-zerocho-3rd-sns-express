# 설정하기

## .env 설정 파일 
```
COOKIE_SECRET=
KAKAO_ID=

REDIS_PASSWORD=
REDIS_HOST=
REDIS_PORT=
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

## TODO
* middlewares 란 무엇인가?

## 15.1 서비스 운영을 위한 패키지
____15.1.1 morgan과 express-session
____15.1.2 시퀄라이즈
____15.1.3 cross-env
____15.1.4 sanitize-html, csurf
____15.1.5 pm2
____15.1.6 winston
____15.1.7 helmet, hpp
____15.1.8 connect-redis
____15.1.9 nvm, n

### 15.1.7 helmet, hpp
```
npm i helmet hpp
```
```javascript
const helmet = require('helmet');
const hpp = require('hpp');

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(
        helmet({
            contentSecurityPolicy: false,
            crossOriginEmbedderPolicy: false,
            crossOriginResourcePolicy: false,
        }),
    );
    app.use(hpp());
} else {}
```
### 15.1.8 connect-redis
```
npm i redis connect-redis
// redis 드라이브
// connect-redis 미들웨어
```
* 장점
  * 서버 재시작시 로그아웃 방지
  * 스케일 아웃을 가능하게 한다. (세션 관리등)

#### express-rate-limit
10장에서 사용하는 express-rate-limit 패키지도 사용량을 메모리에 기록하므로 재시작하면 사용량이 초기화
됩니다. 따라서 이것도 레디스에 기록하는 것이 좋습니다. rate-limit-rate 라는 패키지와 express-rate-limit
패키지를 같이 사용하면 됩니다.

## 이슈 사항
### 버전 문제 레디스 4 버전 부터는 방식이 변경됨.
```
// redis@v4
const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

// redis@v3
const { createClient } = require("redis")
let redisClient = createClient()

https://www.npmjs.com/package/connect-redis
```