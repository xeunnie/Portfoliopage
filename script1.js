function changeText(isHover) {
    var link = document.querySelector('.github');
    if (isHover) {
      link.textContent = 'GITHUB';
    } else {
      link.textContent = 'CHLOE CHOI';
    }
  }