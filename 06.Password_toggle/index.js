
const password_input = document.querySelector('#password');
console.log(password_input);
console.log(password_input.type);

const button = document.querySelector('button');
console.log(button);


button.addEventListener('click', () => {
    console.log('클릭했습니다');
    // 버튼 클릭하면 -> 비밀번호가 텍스트로 보임, 다시 클릭하면 다시 안보임
    (password_input.type === 'password') ? password_input.type = 'text' : password_input.type = 'password';
})