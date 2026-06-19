const categoriesWrapper = document.getElementById("cardsWrapper");
const categoriesList = document.getElementById("categoriesList");
const categoriesApiUrl = "https://openapi.programming-hero.com/api/categories";

function loadCategories() {
    // Implementation for loading categories
    async function fetchCategories() {
        try {
            const response = await fetch(categoriesApiUrl);
            const categories = await response.json();
            console.log(categories);
            categories.categories.forEach(category => {
                console.log(category.category_name);
                const listItem = document.createElement("li");
                listItem.classList.add("w-full", "px-4", "py-1", "mx-0", "text-[#1f2937]", "hover:text-[#ffffffec]", "bg-tranaparent", "hover:bg-[#15803D]", "rounded-sm","shadow-sm", "hover:shadow-md","cursor-pointer");
                listItem.textContent = category.category_name;
                categoriesList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    fetchCategories();
}

loadCategories();