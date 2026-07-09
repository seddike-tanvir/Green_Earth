
// <<<<<<<<<<<<<<<<<<<<<<<< main page loader function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const loadingHTML = document.getElementById("loadingScreen");

const mainLoadingScreen = (parentDiv, mx, my, loaderType, itemSize, itemScale, itemColor) => {
    loadingHTML.classList.add(`mx-[${mx}]`, `my-[${my}]`);

    loadingHTML.innerHTML = `
        <span class="loading loading-${loaderType} loading-${itemSize} scale-[${itemScale}] text-[${itemColor}]"></span>
    `; 
};

mainLoadingScreen("", "auto", "", "ball", "lg", "3", "#facc15");

window.addEventListener("load", function () {
    if (loadingHTML){
        loadingHTML.classList.add("hidden");
        loadingHTML.classList.remove("flex");
    }
});







// <<<<<<<<<<<< reusable loader for all/any parents >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const displayLoadingScreen = (parentDiv, mx, my, loaderType, itemSize, itemScale, itemColor) => {
    if (!parentDiv) return;
    const loadingHTML = `
            <div id="cardAreaLoadingSpinner" class="cardAreaLoadingSpinner flex w-full h-full justify-center items-center mx-[${mx}] my-[${my}] ">
                <span class="loading loading-${loaderType} loading-${itemSize} scale-[${itemScale}] text-[${itemColor}] transition-[1s]"></span>
            </div>
        `;
    parentDiv.innerHTML = loadingHTML;
}


