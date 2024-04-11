document.addEventListener("DOMContentLoaded", function () {
    const btnLeft = document.querySelector(".leftBtn");
    const btnRight = document.querySelector(".rightBtn");
    const authSection = document.querySelector(".authSection");
    const authContainers = authSection.children;

    let currentIndex = 0; 

    const updateVisibility = () => {
    for (let i = 0; i < authContainers.length; i++) {
        if (i === currentIndex || i === currentIndex + 1) {
            authContainers[i].style.display = "flex";
        } else {
            authContainers[i].style.display = "none";
        }
    }
    };

    // Event listener for the left button
    btnLeft.addEventListener("click", function () {
        if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
        }
    });

    // Event listener for the right button
    btnRight.addEventListener("click", function () {
        if (currentIndex < authContainers.length - 2) {
        currentIndex++;
        updateVisibility();
        }
    });
});