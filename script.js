document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn_leftT').classList.add('off');

    var secondProfileLeftButton = document.querySelector('.profileWrap:nth-child(2) .btn_leftT');
    if (secondProfileLeftButton) {
        secondProfileLeftButton.classList.add('off');
    }
});

function toggleProfileBox1(direction) {
    var profileWrap = document.querySelector('.profileWrap:nth-child(1)');
    if (!profileWrap) {
        console.error("Profile wrap 1 not found!");
        return;
    }

    var boxContents = profileWrap.querySelectorAll('.boxContents');
    if (boxContents.length === 0) {
        console.error("No boxContents found in profile wrap 1!");
        return;
    }

    var leftButton = profileWrap.querySelector('.btn_leftT');
    var rightButton = profileWrap.querySelector('.btn_rightT');

    var currentContentIndex = Array.from(boxContents).findIndex(content => content.style.display !== 'none');

    if (direction === 'left') {
        if (currentContentIndex === 0) {
            return;
        }
        boxContents[currentContentIndex].style.display = 'none';
        boxContents[currentContentIndex - 1].style.display = 'block';
        currentContentIndex--;
    } else if (direction === 'right') {
        if (currentContentIndex === boxContents.length - 1) {
            return;
        }
        boxContents[currentContentIndex].style.display = 'none';
        boxContents[currentContentIndex + 1].style.display = 'block';
        currentContentIndex++;
    }

    leftButton.classList.toggle('off', currentContentIndex === 0);
    rightButton.classList.toggle('off', currentContentIndex === boxContents.length - 1);
}

function toggleProfileBox2(direction) {
    var profileWrap = document.querySelector('.profileWrap:nth-child(2)');
    if (!profileWrap) {
        console.error("Profile wrap 2 not found!");
        return;
    }

    var boxContents = profileWrap.querySelectorAll('.boxContents');
    if (boxContents.length === 0) {
        console.error("No boxContents found in profile wrap 2!");
        return;
    }

    var leftButton = profileWrap.querySelector('.btn_leftT');
    var rightButton = profileWrap.querySelector('.btn_rightT');

    var currentContentIndex = Array.from(boxContents).findIndex(content => content.style.display !== 'none');

    if (direction === 'left') {
        if (currentContentIndex === 0) {
            return;
        }
        boxContents[currentContentIndex].style.display = 'none';
        boxContents[currentContentIndex - 1].style.display = 'block';
        currentContentIndex--;
    } else if (direction === 'right') {
        if (currentContentIndex === boxContents.length - 1) {
            return;
        }
        boxContents[currentContentIndex].style.display = 'none';
        boxContents[currentContentIndex + 1].style.display = 'block';
        currentContentIndex++;
    }

    leftButton.classList.toggle('off', currentContentIndex === 0);
    rightButton.classList.toggle('off', currentContentIndex === boxContents.length - 1);
}
