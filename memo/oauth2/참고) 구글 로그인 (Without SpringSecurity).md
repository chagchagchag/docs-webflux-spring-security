## 참고) 구글 로그인 (Without SpringSecurity)

Spring 에서 제공하는 OAuth2 Client 기능을 그대로 사용하기에는 개인적으로는 Feign Client 등을 통해 커스터마이징을 해야 하는 부분들이 있어서 raw 레벨로 로그인하는 방식을 계속 찾아보고 적용한 과정입니다.<br/>

제 경우에는 browser 로 접근하는 방식을 어떻게 해결할지에 대해(React 등과 같은 Frontend 코드를 이용) 해결된다면 아마도 OAuth2 login 은 Spring OAuth2 Client 를 사용하지 않고 개인적으로 작성한 코드를 사용하면서 기존 Spring Security 를 그대로 사용하게 될 듯 합니다.<br/>

이렇게 하는 이유는 OAuth2 Client 기능을 그대로 사용했을 때 OAuth2 Client 내부 구현이 바뀌었을 때 대응할 수 있는 대응책이 없는 것 같고, FeignClient 를 잘 활용하고 있기 때문에 Fiegn Client 로 직접 OAuth2 프로세스를 수행하는 과정을 직접 모듈로 구현하는 것이 좋겠다는 판단이 들어서입니다.<br/>



### 1) browser 에 아래 주소를 입력

- [https://accounts.google.com/o/oauth2/auth?client_id={클라이언트ID}&redirect_uri=http://localhost:8080/welcome&response_type=token&scope=profile](https://accounts.google.com/o/oauth2/auth?client_id={클라이언트ID}&redirect_uri=http://localhost:8080/welcome&response_type=token&scope=profile)<br/>

<br/>



http 요청은 아래와 같이 수행합니다.

```http
GET https://accounts.google.com/o/oauth2/auth?
    client_id=clientId
    &redirect_uri=http://localhost:8080/welcome
    &response_type=token
    &scope=profile
    
Accept: application/json
```

<br/>



### 2) browser redirect 된 주소

spring security 는 아래 주소로 이동하는 절차를 간소화해서 마치 프로퍼티 몇개만 입력하면 바로 실행 가능한 것처럼 구성되어 있습니다.<br/>

- [https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id={clientId}&redirect_uri={base64 encoding 된 redirect uri}&response_type=token&scope=profile&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow](https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id={clientId}&redirect_uri={base64 encoding 된 redirect uri}&response_type=token&scope=profile&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow)

<br/>

```http
GET https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id={clientId}&redirect_uri={base64 encoding 된 redirect ur}&response_type=token&scope=profile&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow
```

<br/>



### 3) (액세스 토큰) 내 서버의 특정 주소로 리다이렉트

구글 계정은 access token 을 get parameter 에 실어서 아래와 같은 구글 콘솔에 입력한 주소로 리다이렉트 시켜줍니다.<br/>

- [http://localhost:8080/welcome#access_token={액세스 토큰}&token_type=Bearer&expires_in=3599&scope={스코프}](http://localhost:8080/welcome#access_token={액세스 토큰}&token_type=Bearer&expires_in=3599&scope={스코프})

<br/>



### 4) (사용자 조회) 사용자가 동의한 OAuth2 정보 조회

- 헤더 : `Authorization : Bearer {액세스토큰}` 을 주어서 아래 주소로 GET 조회합니다.
- GET [https://www.googleapis.com/oauth2/v2/userinfo](https://www.googleapis.com/oauth2/v2/userinfo)



