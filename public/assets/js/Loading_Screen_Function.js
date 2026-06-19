const loadingHTML = document.getElementById("loadingScreen");

const displayLoadingScreen = (mx, my, loaderType, itemSize, itemScale, itemColor) => {
    loadingHTML.classList.add(`mx-[${mx}]`, `my-[${my}]`);

    loadingHTML.innerHTML = `
        <span class="loading loading-${loaderType} loading-${itemSize} scale-[${itemScale}] text-[${itemColor}]"></span>
    `; 
};

displayLoadingScreen("auto", "", "ball", "lg", "3", "#facc15");

window.addEventListener("load", function () {
    if (loadingHTML){
        loadingHTML.classList.add("hidden");
        loadingHTML.classList.remove("flex");
    }
});



