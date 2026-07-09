const cardWrapperAreaHeader = document.getElementById("cardWrapperAreaHeader");
const AllPlantsApiUrl = "https://openapi.programming-hero.com/api/plants";

const loadAllCategoryCards = async () => {
    displayLoadingScreen(cardWrapperAreaHeader, "auto", "25vh", "ring", "xl", "3", "#15803D");
    try {
        const response = await fetch(AllPlantsApiUrl);
        const data = await response.json();
        const plants = data.plants;
        displayAllPlantCards(plants);
        categoriesBtnActiveState(AllTreesBtn); // Set the "All Trees" button as active
    } catch (error) {
        console.error('Error fetching all plants:', error);
    }
}


const loadFilteredCategoryCards = async (categoryID) => {
    const FilterPlantsByCategoryApiUrl = `https://openapi.programming-hero.com/api/category/${categoryID}`;
    
    try {
        const response = await fetch(FilterPlantsByCategoryApiUrl);
        const data = await response.json();
        const plants = data.plants;
        displayPlantCardsByCategory(plants);
    } catch (error) {
        console.error('Error fetching filtered plants:', error);
    }
}


const createCardsWrapper = () => {
    let wrapper = document.getElementById("CardsWrapper");
    if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.id = "CardsWrapper";
        wrapper.classList.add("cardsGrid", "w-full", "mt-4", "px-2", "pb-4", "grid", "justify-items-center", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6");
        cardWrapperAreaHeader.appendChild(wrapper);
    }
    return wrapper;
};


const createCardFromCards = (plants, CardsWrapper) => {
    plants.forEach(plant => {
                const cardItem = document.createElement("div");
                cardItem.classList.add("productCard", "flex", "flex-col", "justify-between", "max-w-[17.5rem]", "bg-white", "rounded-lg", "shadow", "hover:shadow-md", "hover:shadow-[#1c97492f]", "border", "border-[#c3e7cea9]", "hover:border-[#97c9a6d3]", "p-4");
                cardItem.innerHTML = `
                                    <div class="flex flex-col h-full justify-between">
                                            <div>
                                                <div class="media h-40 bg-gray-100 rounded-md mb-4">
                                                    <img src="${plant.image}" alt="${plant.name}" class="w-full h-full object-cover rounded-md">
                                                </div>
                                                <h3 id="plantName" class="text-[1rem] w-max font-bold text-[#1f2937] mb-1 hover:cursor-pointer hover:text-[#15803d] hover:underline">${plant.name}</h3>
                                                
                                                <p class="text-sm text-gray-500 mb-4 line-clamp-3 min-h-[3.75rem]">${plant.description}</p>
                                            </div>

                                            <div class="mt-auto">
                                                <div class="flex items-center justify-between mb-3">
                                                    <span class="inline-block bg-[#e8f5ec] text-[#15803d] text-xs font-medium px-3 py-1 rounded-full">${plant.category}</span>
                                                    <span class="text-base font-bold text-gray-800">&#2547;${plant.price}</span>
                                                </div>
                                                <button class="btn w-full bg-[#15803d] hover:bg-[#116430] py-2.5 text-white font-semibold rounded-[2rem] transition-colors" onclick="addToCart('${plant.id}')">Add to Cart</button>
                                            </div>
                                        </div>
                `;
                CardsWrapper.appendChild(cardItem);
                const plantName = cardItem.querySelector("#plantName");
                plantName.addEventListener("click", () => {
                    ShowPlantDetails(plant.id);
                });
            });
}


const displayAllPlantCards = (plants) => {
    const cardAreaLoadingSpinner = document.getElementById("cardAreaLoadingSpinner");
    if (cardAreaLoadingSpinner) {
        cardAreaLoadingSpinner.remove();
    }

    const CardsWrapper = createCardsWrapper();
    CardsWrapper.innerHTML = "";

    createCardFromCards(plants, CardsWrapper);
}



const displayPlantCardsByCategory = (plants) => {
    const cardAreaLoadingSpinner = document.getElementById("cardAreaLoadingSpinner");
    if (cardAreaLoadingSpinner) {
        cardAreaLoadingSpinner.remove();
    }

    const CardsWrapper = createCardsWrapper();
    CardsWrapper.innerHTML = "";

    createCardFromCards(plants, CardsWrapper);
};

loadAllCategoryCards();




const ShowPlantDetails = (plantId) => {
    const plantDetailsApiUrl = `https://openapi.programming-hero.com/api/plant/${plantId}`;
    // console.log(`Fetching details for plant ID: ${plantDetailsApiUrl}`);

    
}





