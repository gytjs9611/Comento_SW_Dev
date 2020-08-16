# Comento_SW_Dev
This repo is for Full Stack Development Project with Spring Framework.

## 1주차 : 개발환경 구성

1. Github 계정 생성 (완료)

2. 개발 환경 구축 (완료)
	- Spring

			- jdk 1.8, eclipse, spring tools3, tomcat 9.0 설치
			- spring MVC Project 생성, 서버 세팅
	- Database

			- mariaDB 10.2.14, MySQL Workbench 8.0 설치
			- Theater Schema, movie table 생성, data 삽입
		
3. Spring, MariaDB, MyBatis 연동 (완료)

		- pom.xml에 dependency 추가 시 오류  
		   -> spring 버전 통일해야 오류 나지 않음
		  
		- root-context.xml에서 “context:component-scan” is not bound 에러  
		   -> Namespaces 탭 > context 체크해주면 자동으로 코드 추가되어 해결됨
		  
  		- log4j.xml 에서 ‘Cannot find DTD …’ 에러 발생  
		   -> DTD 파일 경로를 절대 경로로 지정하면 해결 가능
		
4. 데이터 조회/처리 코드 (완료)

  		- dao, service, settingweb, vo 패키지 구현
		- 웹 화면을 담당하는 home.jsp 파일 작성
		
<br/>

## 2주차 : 차트 선택, 테스트

1. Bar Chart 예제 테스트 (완료)
		
		- 오픈소스 d3.js 이용
		- http://bl.ocks.org/Caged/6476579 예제 활용하여 테스트 수행
		
		- TypeError: Cannot read property 'map' of undefined 에러 발생
		   -> data.map 에서 해당 에러 발생 (data가 가리키는 data.tsv 파일이 누락됨을 확인)
		   -> data.tsv 파일을 WebContent 폴더 아래 추가함으로써 해결
		  
2. 인터페이스 가이드 작성 (완료)

		  * [Bar Chart] 인터페이스 가이드 Version 1.0
		  
		  1) 요청
		   - 사용자 요청 시 데이터 가져와 차트 그림
		  2) 응답
		    - tsv 타입으로 데이터 제공
		  3) Chart Library 정보
		    - https://d3js.org
		  4) 차트 샘플
		    - 이미지 첨부

