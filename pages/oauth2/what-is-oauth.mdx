## OAuth 핵심 개념

OAuth 는 제 3의 서비스에 계정관리를 맡기는 방식을 의미합니다. 예를 들면 구글 로그인 기능으로 로그인을 하는 방식을 의미합니다.<br/>

> Authorization, Authentication 이라는 용어 자체를 한국 단어로 인증, 인가 로 표현하는데, 실제 정해진 단어가 있는지는 확실치가 않고, 단어가 오용될 수도 있는 소지가 있기에 영어단어를 그대로 사용하겠습니다. <br/>
>
> Authorization, Authentication 이 혼용될때에만 영어단어로 표기하겠습니다. 일반적인 'OAuth 인증' 등과 같은 단어는 그대로 사용합니다.

<br/>



## OAuth 의 핵심 주체

OAuth 에서 주요하게 행동을 하는 4 종류의 주체들이 있습니다. 이 요소들을 정리해보면 아래와 같습니다. 한글로 번역된 용어보다 영어 용어를 보는 것이 기억이 잘 되기아 가급적 영어 용어로 기억하길 추천드립니다.<br/>



### Resource Owner (리소스 오너)

서비스에 자신을 등록한 사용자를 의미합니다. 자기 자신의 정보를 인증 서버에서 사용할 수 있도록 동의를 해서 서비스에 자기자신의 정보의 사용을 허가한 주체입니다.<br/>



### Resource Server (리소스 서버)

Resource Owner 의 정보를 가지고 있고, 이 정보를 보호하고 있는 주체입니다.<br/>



### Authorization Server (인증 서버)

클라이언트에게 토큰을 발급하는 주체입니다. 토큰을 사용하면 클라이언트가 Resource Owner 의 정보에 접근이 가능합니다. 일반적으로 go, java, python 등의 언어로 구글 Open API 프로그램을 작성할 때 이 프로그램이 클라이언트 역할을 합니다. Authorization Server 는 구글을 예로 들면, 구글의 인증만을 수행하는 서버를 의미합니다.<br/>



### Client Application (클라이언트 애플리케이션)

우리가 만들게 될 go, java, python 등의 언어로 작성한 구글 Open API 프로그램이 Client Application 에 해당합니다.<br/>



## Authorization 방식

Client Application 은 Resource Owner 가 Ahtorization Server 에서 Authorization 을 거치면 토큰을 획득하게 되는데, 이렇게 해서 Resource Owner 의 정보를 획득 가능합니다.<br/>

Resource Owner 의 정보를 취득하는 방식은 4 종류가 있습니다.

- Authorization Code Grant Type (권한 부여 코드 승인 타입)
- Implicit Grant Type (암시적 승인 타입)
- Resource Owner Password Credentials (리소스 소유자 암호 자격 증명 승인 타입)
- Client Credentials Grant (클라이언트 자격 증명 승인 타입)



### Authorization Code Grant Type (권한 부여 코드 승인 타입)

OAuth2.0 사용 시 가장 대중화된 인증 방식입니다. 클라이언트가 Resource Owner 에 대한 액세스 토큰, 접근 권한 코드를 발급받는 방식입니다.<br/>

접근 권한 코드라는 것은 Resource Owner 가 가진 권한을 부여받은 코드입니다.<br/>

Authorization Code Grant Type 방식의 Authorization 과정은 아래와 같습니다. 

![](https://docs.vmware.com/en/Single-Sign-On-for-VMware-Tanzu-Application-Service/1.14/sso/Images/images-oauth_auth_code.png)

> 참고 : [docs.vmware.com - SSO/GUID Grant Types](https://docs.vmware.com/en/Single-Sign-On-for-VMware-Tanzu-Application-Service/1.14/sso/GUID-grant-types.html)
>
> - 구글 이미지 검색으로 `authorization code grant type` 을 검색

<br/>



### Implicit Grant Type (암시적 승인 타입)

서버 없이 동작해야 하는 Javascript 애플리케이션에서 사용할 수 있는 방식입니다. 다른 정보 없이 액세스 토큰만을 부여받는 방식입니다.<br/>

클라이언트(Javascript)가 요청을 보냈을 때 리소스의 Authorization 과정만을 거친 후 액세스 토큰을 제공받습니다. 이때 별도의 접근 권한 코드 등을 획득하는 부가적인 과정을 거치지 않습니다.<br/>

접근 권한 코드 등과 같은 별도의 정보가 없기에 '모호하다'는 의미인 Implicit 이라는 단어가 사용되었음에 주목해주세요.<br/>

<br/>



### Resource Owner Password Credentials (리소스 소유자 암호 자격증명 승인 타입)

클라이언트의 패스워드를 이용해서 액세스 토큰에 대한 사용자의 자격 증명을교환하는 방식입니다.<br/>



### Client Credentials Grant (클라이언트 자격 증명 승인 타입)

클라이언트가 컨텍스트 외부에서 얻은 액세스 토큰을 통해 리소스에 접근하는 방식입니다.<br/>



## 이번 문서에서는

이번문서에서는 Authorization Code Grant (인증 코드 부여) 방식의 인증방식만을 정리합니다.<br/>



## 권한 요청 파라미터

### 권한 요청

go, java, python 등의 언어로 작성한 구글 Open API 프로그램이 Client Application 이 특정 사용자 데이터에 접근하기 위해 Authorization Server 에 요청을 보내는 것을 권한 요청이라고 합니다.



### 파라미터

예를 들면 아래와 같은 형식의 파라미터를 사용해서 권한 요청을 수행하는 것이 가능합니다.

```plain
GET some-example.com/auth? \
	client_id=1111& \
	redirect_uri=http://localhost:7777/myapp& \
	response_type=code& \
	scope=profile
```



client\_id

- 인증서버에서 Client Application 에 부여한 id 입니다.
- 이 값은 Client Application 을 구글과 같은 OAuth 서비스에 등록할 때 서비스 내에서 생성한 값 입니다.
- 관리 콘솔 등에서 확인 가능합니다



redirect\_uri

- 로그인 성공시 이동할 uri 를 의미합니다.



response\_type

- Client Application 이 제공받으려 하는 응답 타입입니다.
- 접근 권한 코드를 받으려 할 경우에는 반드시 `code` 파라미터를 포함해야 합니다.
- Authorization Code Grant 방식의 인증에서는 접근권한 코드가 필요하기에 `code` 파라미터는 반드시 필요합니다.



scope

- 제공받고자 하는 Resource Owner 의 정보 목록을 의미합니다.

<br/>



## Resource Owner 의 데이터 접근 동의

Authorization Server 에 처음 요청을 보낼 경우 사용자에게 보이는 페이지를 로그인 페이지로 변경 후 사용자의 데이터에 대한 접근 동의를 얻는 과정을 거치는데 이 과정은 최초 1회 수행합니다. Authorization Server 는 이 때 동의 내용을 저장하게 되며, 이후의 과정부터는 Authorization Server 에서 동의서를 저장하고 있기에 로그인 절차만을 수행합니다.

<br/>



## Authorization Code 리다이렉션

Resource Owner 인 사용자가 로그인에 성공하면 권한 요청 시에 파라미터로 지정한 `redirect_uri` 로 리다이렉션 됩니다. 이때 리다이렉션 되는 uri 의 파라미터에는 인증코드가 함께 제공됩니다. 예를 들면 아래와 같은 uri 로 리다이렉트 되게 됩니다.

```plain
GET http://localhost:7777/my-travel-app?code=33557799aa
```

<br/>



## 액세스 토큰 응답이란?

Authorization Code 를 받은 후에는 이것을 비대칭 키 기반으로 암호화된 Access Token 으로 교환받아야 합니다. 

![](https://docs.vmware.com/en/Single-Sign-On-for-VMware-Tanzu-Application-Service/1.14/sso/Images/images-oauth_auth_code.png)

> 참고 : [docs.vmware.com - SSO/GUID Grant Types](https://docs.vmware.com/en/Single-Sign-On-for-VMware-Tanzu-Application-Service/1.14/sso/GUID-grant-types.html)
>
> - 구글 이미지 검색으로 `authorization code grant type` 을 검색

예를 들면 아래와 같은 HTTP Post 요청으로 수행하게 됩니다.

```plain
POST some-example.com/token
{
  "client_id": "1111",
  "client_secret": "aa112233",
  "redirect_uri": "http://localhost:7777/gogogo",
  "grant_type": "authorization_token",
  "code": "33557799aa"
}
```



- client\_secret : 구글 콘솔에서 확인 가능한 Client Application 에 대한 Secret 키 입니다.
- grant\_type : `authorization_token` 으로 지정해줬습니다.

