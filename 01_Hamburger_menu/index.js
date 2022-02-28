// 햄버거 라인 제어 
// dom 컨트롤

// div.container 이하 모든 부분 선택
let hamMenu = document.querySelector('.container');
console.log(hamMenu);


// container 범위의 박스 전체를 클릭이벤트 설정
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    (hamMenu.classList.length === 1) ? console.log('햄버거 버튼 비활성화') : console.log('햄버거 버튼 클릭 활성화');
})