48기 Frontend C팀 : 이인재 박동철 정다인

<Convention>

\*\*\* Git Commit message

- Add : 레이아웃 / 기능 추가
- Remove : 내용 삭제 (폴더 / 파일 삭제)
- Modify : 수정 (JSON 데이터 포맷 변경 / 버튼 색깔 변경 / 폰트 변경)
- Fix : 버그/오류 해결
- Refactor : 코드 리팩토링 (멘토 리뷰 반영 / 스스로 리팩토링 / 중복 코드 제거 / 불필요 코드 제거 / 성능 개선)
- Docs : 문서에 관련된 수정작업(README.md 등)

\*\*\* 브랜치명

- 첫 글자 대문자(파스칼) 그리고 UI 나 feature 표시 ex) UI/PostList, feature/PostList

\*\*\* 파일 셋업

- 상태관리 : 소문자로 시작 + 카멜
- 컴포넌트 / pages : 첫 글자 대문자(파스칼)
- 폴더명 / style파일명 : 소문자만

\*\*\* 코드 작성 ( 네이밍은 길어도 상관 없음 )

- 변수: 특정 의미를 갖도록 네이밍
- 스타일: 특정 의미를 갖도록 네이밍
- Route의 path: snake case로 ex) path='/post-list'

👉🏻 변수, state : 소문자 카멜케이스 const myData = 10;
👉🏻 function : 소문자 카멜케이스 && arrow function const myFunc = () => {...}
