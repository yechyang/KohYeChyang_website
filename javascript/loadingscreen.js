window.addEventListener("load", function() {
    if (!sessionStorage.getItem("loadingScreenShown")) {
        setTimeout(function() {
            document.getElementById("loading-screen").classList.add("expanding");
            setTimeout(function() {
                document.getElementById("loading-screen").style.display = "none";
                document.getElementById("content").style.display = "block";
                sessionStorage.setItem("loadingScreenShown", "true");
            }, 1000);
        }, 3200);
    } else {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
});
