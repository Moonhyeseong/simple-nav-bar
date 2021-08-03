const toggleBtn = document.querySelector('.navbar_toggleBtn')
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns');

//클릭 이벤트 생성
toggleBtn.addEventListener('click',()=> {
  menu.classList.toggle('active');
  sns.classList.toggle('active');
});