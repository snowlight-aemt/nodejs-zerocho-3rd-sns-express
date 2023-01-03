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