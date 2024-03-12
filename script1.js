//메뉴 스크롤 시 픽스하기
var menu = document.querySelector('.menu');

var menuOffset = menu.offsetTop;

function fixMenu() {
  if (window.scrollY >= menuOffset) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
}

window.addEventListener("scroll", fixMenu);


//메뉴 글씨 바꾸기
function changeText(isHover) {
    var link = document.querySelector('.github');
    if (isHover) {
      link.textContent = 'GITHUB';
    } else {
      link.textContent = 'CHLOE CHOI';
    }
}


let observer = new IntersectionObserver((e)=>{
    e.forEach((box, index)=>{
        if(box.intersectionRatio){
            box.target.style.opacity = 1;
        } else{
            box.target.style.opacity= 0;
        }
    })
})
let section = document.querySelectorAll('.section')
observer.observe(section[0])
observer.observe(section[1])
observer.observe(section[2])
observer.observe(section[3])
observer.observe(section[4])
observer.observe(section[5])