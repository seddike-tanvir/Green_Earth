const CardsWrapper = document.getElementById("CardsWrapper");
const AllPlantsApiUrl = "https://openapi.programming-hero.com/api/plants";

function loadByCategory(categoryID) {
    // Implementation for loading categories
    async function fetchPlantsByCategories() {
        try {
            const FilterPlantsByCategoryApiUrl = `https://openapi.programming-hero.com/api/category/${categoryID}`;
            const response = await fetch(FilterPlantsByCategoryApiUrl);
            const plants = await response.json();
            // console.log(categories);
            plants.plants.forEach(plant => {
                // console.log(category.category_name);
                const cardItem = document.createElement("div");
                cardItem.classList.add("productCard", "max-w-[17.5rem]", "bg-white", "rounded-lg", "shadow", "hover:shadow-md", "hover:shadow-[#1c97492f]", "border", "border-[#c3e7cea9]", "hover:border-[#97c9a6d3]", "p-4");
                cardItem.innerHTML = `
                                    <div class="media h-40 bg-gray-100 rounded-md mb-4"></div>
                                    <h3 class="text-[1rem] font-semibold mb-2 hover:cursor-pointer hover:text-[#0d6e31ab] hover:underline">${plant.name}</h3>
                                    <p class="text-sm text-gray-500 mb-3">${plant.description}</p>
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">${plant.category}</span>
                                        <span class="text-sm font-semibold">&#2547;${plant.price}</span>
                                    </div>
                                    <button class="btn w-full bg-[#15803d] text-white rounded-[2rem]" onclick="addToCart(${plant.id})">Add to Cart</button>
                `;
                CardsWrapper.appendChild(cardItem);
            });
        } catch (error) {
            console.error('Error fetching plants by category:', error);
        }
    }

    fetchPlantsByCategories(categoryID);
}

// loadByCategory(1);


function loadAllCategory() {
    // Implementation for loading categories
    async function fetchAllPlants() {
        try {
            const response = await fetch(AllPlantsApiUrl);
            const plants = await response.json();
            // console.log(plants);
            plants.plants.forEach(plant => {
                // console.log(plant.name);
                const cardItem = document.createElement("div");
                cardItem.classList.add("productCard", "max-w-[17.5rem]", "bg-white", "rounded-lg", "shadow", "hover:shadow-md", "hover:shadow-[#1c97492f]", "border", "border-[#c3e7cea9]", "hover:border-[#97c9a6d3]", "p-4");
                cardItem.innerHTML = `
                                    <div class="media h-40 bg-gray-100 rounded-md mb-4"></div>
                                    <h3 class="text-[1rem] font-semibold mb-2 hover:cursor-pointer hover:text-[#0d6e31ab] hover:underline">${plant.name}</h3>
                                    <p class="text-sm text-gray-500 mb-3">${plant.description}</p>
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">${plant.category}</span>
                                        <span class="text-sm font-semibold">&#2547;${plant.price}</span>
                                    </div>
                                    <button class="btn w-full bg-[#15803d] text-white rounded-[2rem]" onclick="addToCart(${plant.id})">Add to Cart</button>
                `;
                CardsWrapper.appendChild(cardItem);
            });
        } catch (error) {
            console.error('Error fetching all plants:', error);
        }
    }

    fetchAllPlants();
}
// loadAllCategory();















                                // <div class="productCard max-w-[17.5rem] bg-white rounded-lg shadow hover:shadow-md hover:shadow-[#1c97492f] border border-[#c3e7cea9] hover:border-[#97c9a6d3]  p-4">
                                //     <div class="media h-40 bg-gray-100 rounded-md mb-4"></div>
                                //     <h3 class="text-[1rem] font-semibold mb-2 hover:cursor-pointer hover:text-[#0d6e31ab] hover:underline">Mango Tree</h3>
                                //     <p class="text-sm text-gray-500 mb-3">A fast-growing tropical tree that produces delicious, juicy mangoes during summer.</p>
                                //     <div class="flex items-center justify-between mb-3">
                                //         <span class="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Fruit Tree</span>
                                //         <span class="text-sm font-semibold">&#2547;500</span>
                                //     </div>
                                //     <button class="btn w-full bg-[#15803d] text-white rounded-[2rem]">Add to Cart</button>
                                // </div>