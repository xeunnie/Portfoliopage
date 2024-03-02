// function toggleProfileBox(button) {
//     var boxContents = button.parentElement.querySelector('.boxContents');
//     boxContents.style.display = (boxContents.style.display === 'none') ? 'block' : 'none';
// }
// function toggleProfileBox(button, direction) {
//     var boxContents = button.parentElement.querySelector('.boxContents');
//     var offButton = button.parentElement.querySelector('.off');
//
//     // Toggle profile box display
//     boxContents.style.display = (boxContents.style.display === 'none') ? 'block' : 'none';
//
//     // Toggle off class for buttons
//     if (direction === 'left') {
//         button.classList.add('off');
//         offButton.classList.remove('off');
//     } else {
//         button.classList.remove('off');
//         offButton.classList.add('off');
//     }
// }
// function toggleProfileBox(direction) {
//     var boxContents = document.querySelectorAll('.boxContents');
//     var leftButton = document.querySelector('.btn_leftT');
//     var rightButton = document.querySelector('.btn_rightT');
//
//     if (direction === 'left') {
//         boxContents[0].style.display = 'block';
//         boxContents[1].style.display = 'none';
//         leftButton.classList.add('off');
//         rightButton.classList.remove('off');
//         } else {
//             boxContents[0].style.display = 'none';
//             boxContents[1].style.display = 'block';
//             leftButton.classList.remove('off');
//
//             // Check if it's the last boxContents and disable right button
//             if (boxContents[1] === boxContents[boxContents.length - 1]) {
//             rightButton.classList.add('off');
//         } else {
//             rightButton.classList.remove('off');
//         }
//     }
// }
var currentContentIndex = 0; // Track the index of the currently visible content

function toggleProfileBox(direction) {
    var boxContents = document.querySelectorAll('.boxContents');
    var leftButton = document.querySelector('.btn_leftT');
    var rightButton = document.querySelector('.btn_rightT');

    if (direction === 'left') {
        // Check if it's the first content, then do nothing
        if (currentContentIndex === 0) {
            return;
        }
        // Hide current content
        boxContents[currentContentIndex].style.display = 'none';
        // Show previous content
        boxContents[currentContentIndex - 1].style.display = 'block';
        // Update current content index
        currentContentIndex--;

        // Toggle button visibility
        rightButton.classList.remove('off');
        if (currentContentIndex === 0) {
            leftButton.classList.add('off');
        }
    } else {
        // Check if it's the last content, then do nothing
        if (currentContentIndex === boxContents.length - 1) {
            return;
        }
        // Hide current content
        boxContents[currentContentIndex].style.display = 'none';
        // Show next content
        boxContents[currentContentIndex + 1].style.display = 'block';
        // Update current content index
        currentContentIndex++;

        // Toggle button visibility
        leftButton.classList.remove('off');
        if (currentContentIndex === boxContents.length - 1) {
            rightButton.classList.add('off');
        }
    }
}
