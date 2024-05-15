## 구글 클라우드 앱 토큰 생성

> 주의
>
> - 앱 이름에는 'google' 이라는 단어가 들어가면 안됩니다.
>
>   앱 이름에 'google' 이라는 단어가 포함되면 에러를 내기에 아래 예제문서에서는 'analytics-manager' 라는 이름으로 지정해주었습니다.
>
> - 참고 : [앱을 저장하는 중에 오류가 발생했습니다. 요청이 악용으로 분류되었으며 진행할 수 없습니다. 해결 방법](https://happy-jjang-a.tistory.com/288)
>
> - 이번 설명 문서에서는 프로젝트 명에 'google' 이라는 단어를 포함했지만, 나중에 혼동을 방지하고 싶다면 가급적이면 프로젝트 명도 'google' 단어를 포함하지 않는 것을 추천합니다.



![](./img/google-cloud-platform/1.png)

<br/>



![](./img/google-cloud-platform/2.png)

<br/>



![](./img/google-cloud-platform/3.png)

<br/>



![](./img/google-cloud-platform/4.png)

<br/>





![](./img/google-cloud-platform/5.png)

<br/>



![](./img/google-cloud-platform/6.png)

<br/>



![](./img/google-cloud-platform/7.png)

<br/>



![](./img/google-cloud-platform/8.png)

<br/>



앱 이름에는 google 이라는 단어가 들어가면 안됩니다.

google 이라는 단어가 포함되면 에러를 내기에 아래와 같이 analytics-manager 라는 이름으로 지정해주었습니다.

> 참고 : [앱을 저장하는 중에 오류가 발생했습니다. 요청이 악용으로 분류되었으며 진행할 수 없습니다. 해결 방법](https://happy-jjang-a.tistory.com/288)

![](./img/google-cloud-platform/9.png)

<br/>



![](./img/google-cloud-platform/10.png)

<br/>



![](./img/google-cloud-platform/11.png)

<br/>



![](./img/google-cloud-platform/12.png)

<br/>



![](./img/google-cloud-platform/13.png)

<br/>



![](./img/google-cloud-platform/14.png)

<br/>



![](./img/google-cloud-platform/15.png)

<br/>



![](./img/google-cloud-platform/16.png)

<br/>



![](./img/google-cloud-platform/17.png)

<br/>



위에서 클라이언트 ID, 클라이언트 보안 비밀번호는 Spring Security 속성에는 아래와 같이 매칭됩니다.

```yaml
spring:
  # ... 
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: 클라이언트 ID 
            client-secret: 클라이언트 보안 비밀번호
            scope:
              - email
              - profile
# ...
```





