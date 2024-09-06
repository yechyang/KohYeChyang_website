// window.addEventListener("load", function() {
//     setTimeout(function() {
//         document.getElementById("loading-screen").style.animation = "fadeOut 1s ease forwards";
//         setTimeout(function() {
//             document.getElementById("loading-screen").style.display = "none";
//             document.getElementById("content").style.display = "block";
//         }, 1000);
//     }, 3200);
// });


// window.addEventListener("load", function() {
//     setTimeout(function() {
//         document.getElementById("loading-screen").style.animation = "zoomOut 1s ease forwards";
//         setTimeout(function() {
//             document.getElementById("loading-screen").style.display = "none";
//             document.getElementById("content").style.display = "block";
//         }, 1000);
//     }, 3200);
// });


window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").classList.add("expanding");
        setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000);
    }, 3200);
});
