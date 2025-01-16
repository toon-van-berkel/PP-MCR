document.addEventListener("DOMContentLoaded", () => {
    const merchData = [
        { title: "Sweet Revenge T-Shirt", price: "$30.00 USB", img: "./images/Sweet_Revenge_TShirt-Merch.png" },
        { title: "Dying Rose T-Shirt", price: "$39.99 USB", img: "./images/Dying_Rose_TShirt-Merch.png" },
        { title: "Return T-Shirt", price: "$30.00 USB", img: "./images/Return_TShirt-Merch.png" },
        { title: "The Black Parade T-Shirt", price: "$30.00 USB", img: "./images/The_Black_Parade_TShirt-Merch.png" },
    ];

    let currentPage = 1;
    const itemsPerPage = 15;
    const totalPages = Math.ceil(merchData.length / itemsPerPage);
    
    const merchContainer = document.getElementById("merch-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageIndicator = document.getElementById("pageIndicator");

    function renderPage(page) {
        merchContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToShow = merchData.slice(start, end);

        itemsToShow.forEach(merchItem => {
            const card = document.createElement("a");
            card.href = "#";
            card.classList.add("text-decoration-none", "col");

            card.innerHTML = `
                <div class="card merch-card">
                    <img src="${merchItem.img}" alt="${merchItem.title}" class="card-img-top">
                    <h3 class="card-title">${merchItem.title}</h3>
                    <h4 class="card-subtitle">${merchItem.price}</h4>
                </div>
            `;
            merchContainer.appendChild(card);
        });

        // Update navigation
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage);
});
