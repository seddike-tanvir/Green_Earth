const categoriesList = document.getElementById("categoriesList");
const categoriesApiUrl = "https://openapi.programming-hero.com/api/categories";
const AllTreesBtn = document.getElementById("AllTreesBtn");



const loadCategories = async () => {
    try{
        const response = await fetch(categoriesApiUrl);
        const data = await response.json();
        const categories = data.categories;
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

const displayCategories = (categories) => {
    categories.forEach(category => {
        const listItem = document.createElement("li"); 
        listItem.classList.add("w-full", "px-4", "py-1", "mx-0", "text-[#1f2937]", "hover:text-[#ffffffec]", "bg-tranaparent", "hover:bg-[#15803D]", "rounded-sm","shadow-sm", "hover:shadow-md","cursor-pointer");
        listItem.innerText = category.category_name;
        listItem.addEventListener("click", () => {
            loadFilteredCategoryCards(category.id);      
            categoriesBtnActiveState(listItem);      
        });
        categoriesList.appendChild(listItem);
    });
}

loadCategories();
AllTreesBtn.addEventListener("click", () => {
    loadAllCategoryCards();
});


const categoriesBtnActiveState = (TheBtn) => {
    const allCategoryBtns = categoriesList.querySelectorAll("li");
    allCategoryBtns.forEach(btn => {
        if (btn === TheBtn) {
            btn.classList.add("bg-[#15803D]", "text-[#ffffffec]");
            btn.classList.remove("bg-tranaparent", "text-[#1f2937]");
        } else {
            btn.classList.remove("bg-[#15803D]", "text-[#ffffffec]");
            btn.classList.add("bg-tranaparent", "text-[#1f2937]");
        }
    });
}
