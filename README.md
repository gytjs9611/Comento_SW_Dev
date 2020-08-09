# Comento_SW_Dev

This repo is for Full Stack Development Project with Spring Framework.


## 1주차
1. Github 계정 생성
2. 개발 환경 구축
  1) Spring
    - jdk 1.8, eclipse, spring tools3, tomcat 9.0 설치
    - spring MVC Project 생성, 서버 세팅
  2) DataBase
    - mariaDB 10.2.14, MySQL Workbench 8.0 설치
    - Theater Schema, movie table 생성, data 삽입
3. Spring, MariaDB, MyBatis 연동
  1) pom.xml에 dependency 추가
    - spring 버전 통일해야 오류 나지 않음
  2) root-context.xml 수정
    - “context:component-scan” is not bound 에러
      : Namespaces 탭 > context 체크해주면 자동으로 코드 추가되어 해결됨
  3) log4j.xml 수정
    - log4j.xml에서 ‘Cannot find DTD …’ 에러 발생
		  : DTD 파일 경로를 절대 경로로 지정하면 해결 가능
4. 데이터 조회/처리 코드
  1) dao, service, settingweb, vo 패키지 구현
	2) 웹 화면을 담당하는 home.jsp 파일 작성


