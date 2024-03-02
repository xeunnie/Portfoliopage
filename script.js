// // // function toggleProfileBox(button) {
// // //     var boxContents = button.parentElement.querySelector('.boxContents');
// // //     boxContents.style.display = (boxContents.style.display === 'none') ? 'block' : 'none';
// // // }
// // // function toggleProfileBox(button, direction) {
// // //     var boxContents = button.parentElement.querySelector('.boxContents');
// // //     var offButton = button.parentElement.querySelector('.off');
// // //
// // //     // Toggle profile box display
// // //     boxContents.style.display = (boxContents.style.display === 'none') ? 'block' : 'none';
// // //
// // //     // Toggle off class for buttons
// // //     if (direction === 'left') {
// // //         button.classList.add('off');
// // //         offButton.classList.remove('off');
// // //     } else {
// // //         button.classList.remove('off');
// // //         offButton.classList.add('off');
// // //     }
// // // }
// // // function toggleProfileBox(direction) {
// // //     var boxContents = document.querySelectorAll('.boxContents');
// // //     var leftButton = document.querySelector('.btn_leftT');
// // //     var rightButton = document.querySelector('.btn_rightT');
// // //
// // //     if (direction === 'left') {
// // //         boxContents[0].style.display = 'block';
// // //         boxContents[1].style.display = 'none';
// // //         leftButton.classList.add('off');
// // //         rightButton.classList.remove('off');
// // //         } else {
// // //             boxContents[0].style.display = 'none';
// // //             boxContents[1].style.display = 'block';
// // //             leftButton.classList.remove('off');
// // //
// // //             // Check if it's the last boxContents and disable right button
// // //             if (boxContents[1] === boxContents[boxContents.length - 1]) {
// // //             rightButton.classList.add('off');
// // //         } else {
// // //             rightButton.classList.remove('off');
// // //         }
// // //     }
// // // }
// // var currentContentIndex = 0; // Track the index of the currently visible content
// //
// // function toggleProfileBox(direction) {
// //     var boxContents = document.querySelectorAll('.boxContents');
// //     var leftButton = document.querySelector('.btn_leftT');
// //     var rightButton = document.querySelector('.btn_rightT');
// //
// //     if (direction === 'left') {
// //         // Check if it's the first content, then do nothing
// //         if (currentContentIndex === 0) {
// //             return;
// //         }
// //         // Hide current content
// //         boxContents[currentContentIndex].style.display = 'none';
// //         // Show previous content
// //         boxContents[currentContentIndex - 1].style.display = 'block';
// //         // Update current content index
// //         currentContentIndex--;
// //
// //         // Toggle button visibility
// //         rightButton.classList.remove('off');
// //         if (currentContentIndex === 0) {
// //             leftButton.classList.add('off');
// //         }
// //     } else {
// //         // Check if it's the last content, then do nothing
// //         if (currentContentIndex === boxContents.length - 1) {
// //             return;
// //         }
// //         // Hide current content
// //         boxContents[currentContentIndex].style.display = 'none';
// //         // Show next content
// //         boxContents[currentContentIndex + 1].style.display = 'block';
// //         // Update current content index
// //         currentContentIndex++;
// //
// //         // Toggle button visibility
// //         leftButton.classList.remove('off');
// //         if (currentContentIndex === boxContents.length - 1) {
// //             rightButton.classList.add('off');
// //         }
// //     }
// // }
// var currentContentIndex = 0; // 현재 표시된 콘텐츠의 인덱스를 추적합니다.
//
// function toggleProfileBox(direction) {
//     var boxContents = document.querySelectorAll('.boxContents'); // 모든 boxContents 요소를 가져옵니다.
//     var leftButton = document.querySelector('.btn_leftT'); // 좌측 버튼 요소를 가져옵니다.
//     var rightButton = document.querySelector('.btn_rightT'); // 우측 버튼 요소를 가져옵니다.
//
//     if (direction === 'left') {
//         // 첫 번째 콘텐츠일 때는 함수를 종료합니다.
//         if (currentContentIndex === 0) {
//             return;
//         }
//         // 현재 콘텐츠를 숨깁니다.
//         boxContents[currentContentIndex].style.display = 'none';
//         // 이전 콘텐츠를 표시합니다.
//         boxContents[currentContentIndex - 1].style.display = 'block';
//         // 현재 콘텐츠 인덱스를 업데이트합니다.
//         currentContentIndex--;
//
//         // 버튼 가시성을 토글합니다.
//         rightButton.classList.remove('off');
//         if (currentContentIndex === 0) {
//             leftButton.classList.add('off');
//         }
//     } else {
//         // 마지막 콘텐츠일 때는 함수를 종료합니다.
//         if (currentContentIndex === boxContents.length - 1) {
//             return;
//         }
//         // 현재 콘텐츠를 숨깁니다.
//         boxContents[currentContentIndex].style.display = 'none';
//         // 다음 콘텐츠를 표시합니다.
//         boxContents[currentContentIndex + 1].style.display = 'block';
//         // 현재 콘텐츠 인덱스를 업데이트합니다.
//         currentContentIndex++;
//
//         // 버튼 가시성을 토글합니다.
//         leftButton.classList.remove('off');
//         if (currentContentIndex === boxContents.length - 1) {
//             rightButton.classList.add('off');
//         }
//     }
// }
// 프로필랩 1의 현재 콘텐츠 인덱스를 추적합니다.
var currentContentIndex1 = 0;

// 프로필랩 1에서 좌측 및 우측 버튼을 토글하는 함수입니다.
function toggleProfileBox1(direction) {
    var boxContents = document.querySelectorAll('#profileWrap1 .boxContents'); // 프로필랩 1의 boxContents 요소를 가져옵니다.
    var leftButton = document.querySelector('#profileWrap1 .btn_leftT'); // 프로필랩 1의 좌측 버튼 요소를 가져옵니다.
    var rightButton = document.querySelector('#profileWrap1 .btn_rightT'); // 프로필랩 1의 우측 버튼 요소를 가져옵니다.

    // 프로필랩 1에서 좌측 버튼을 클릭했을 때
    if (direction === 'left') {
        if (currentContentIndex1 === 0) {
            return;
        }
        boxContents[currentContentIndex1].style.display = 'none';
        boxContents[currentContentIndex1 - 1].style.display = 'block';
        currentContentIndex1--;

        if (currentContentIndex1 === 0) {
            leftButton.classList.add('off');
        }
        rightButton.classList.remove('off');
    } else { // 프로필랩 1에서 우측 버튼을 클릭했을 때
        if (currentContentIndex1 === boxContents.length - 1) {
            return;
        }
        boxContents[currentContentIndex1].style.display = 'none';
        boxContents[currentContentIndex1 + 1].style.display = 'block';
        currentContentIndex1++;

        if (currentContentIndex1 === boxContents.length - 1) {
            rightButton.classList.add('off');
        }
        leftButton.classList.remove('off');
    }
}

// 프로필랩 2의 현재 콘텐츠 인덱스를 추적합니다.
var currentContentIndex2 = 0;

// 프로필랩 2에서 좌측 및 우측 버튼을 토글하는 함수입니다.
function toggleProfileBox2(direction) {
    var boxContents = document.querySelectorAll('#profileWrap2 .boxContents'); // 프로필랩 2의 boxContents 요소를 가져옵니다.
    var leftButton = document.querySelector('#profileWrap2 .btn_leftT'); // 프로필랩 2의 좌측 버튼 요소를 가져옵니다.
    var rightButton = document.querySelector('#profileWrap2 .btn_rightT'); // 프로필랩 2의 우측 버튼 요소를 가져옵니다.

    // 프로필랩 2에서 좌측 버튼을 클릭했을 때
    if (direction === 'left') {
        if (currentContentIndex2 === 0) {
            return;
        }
        boxContents[currentContentIndex2].style.display = 'none';
        boxContents[currentContentIndex2 - 1].style.display = 'block';
        currentContentIndex2--;

        if (currentContentIndex2 === 0) {
            leftButton.classList.add('off');
        }
        rightButton.classList.remove('off');
    } else { // 프로필랩 2에서 우측 버튼을 클릭했을 때
        if (currentContentIndex2 === boxContents.length - 1) {
            return;
        }
        boxContents[currentContentIndex2].style.display = 'none';
        boxContents[currentContentIndex2 + 1].style.display = 'block';
        currentContentIndex2++;

        if (currentContentIndex2 === boxContents.length - 1) {
            rightButton.classList.add('off');
        }
        leftButton.classList.remove('off');
    }
}
