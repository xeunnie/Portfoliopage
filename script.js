document.addEventListener("DOMContentLoaded", function() {
    // 페이지 로드시 첫 번째 프로필 상자의 좌측 버튼을 비활성화합니다.
    document.querySelector('.btn_leftT').classList.add('off');
});

function toggleProfileBox(profileIndex, direction) {
    var profileWrap = document.getElementById('profile' + profileIndex);
    if (!profileWrap) {
        console.error("Profile wrap " + profileIndex + " not found!");
        return;
    }

    var boxContents = profileWrap.querySelectorAll('.boxContents');
    if (boxContents.length === 0) {
        console.error("No boxContents found in profile wrap " + profileIndex + "!");
        return;
    }

    var currentContent = profileWrap.querySelector('.visible');
    var currentContentIndex = Array.from(boxContents).indexOf(currentContent);

    var nextContentIndex;
    if (direction === 'left') {
        nextContentIndex = currentContentIndex - 1;
    } else if (direction === 'right') {
        nextContentIndex = currentContentIndex + 1;
    }

    if (nextContentIndex < 0 || nextContentIndex >= boxContents.length) {
        return;
    }

    // 현재 보이는 내용의 투명도를 0으로 설정하여 사라지게 합니다.
    currentContent.style.opacity = '0';

    // 다음 콘텐츠를 표시하기 전에 충분한 시간을 기다립니다.
    setTimeout(function() {
        // 이전에 보이던 내용을 숨깁니다.
        currentContent.classList.remove('visible');
        // 새로운 내용을 보이게 합니다.
        boxContents[nextContentIndex].classList.add('visible');
        // 새로운 내용의 투명도를 1로 설정하여 나타나게 합니다.
        boxContents[nextContentIndex].style.opacity = '1';
    }, 300); // 트랜지션 시간의 60% 정도의 시간 후에 내용을 변경합니다.

    // 버튼의 활성화 여부를 결정합니다.
    var leftButton = profileWrap.querySelector('.btn_leftT');
    var rightButton = profileWrap.querySelector('.btn_rightT');
    leftButton.classList.toggle('off', nextContentIndex === 0);
    rightButton.classList.toggle('off', nextContentIndex === boxContents.length - 1);
}