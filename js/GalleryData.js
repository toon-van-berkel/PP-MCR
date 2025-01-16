document.addEventListener("DOMContentLoaded", () => {
    const galleryData = [
        { img: "./images/The_Foundation_Of_Decay-Thumbnail.png" },
        { img: "./images/Teenagers-Thumbnail.jpg" },
        { img: "./images/Welcome_To_The_Black_Parade-Thumbnail.jpg" },
        { img: "./images/Famous_Last_Words-Thumbnail.jpg" },
        { img: "./images/Helena-Thumbnail.jpg" },
        { img: "./images/The_Ghost_Of_You-Thumbnail.jpg" },
        { img: "./images/I_Dont_Love_You-Thumbnail.jpg" },
        { img: "./images/Disenchanted-Thumbnail.jpg" },
        { img: "./images/Im_Not_Okay-Thumbnail.jpg" },
        { img: "./images/Na_Na_Na-Thumbnail.jpg" },
        { img: "./images/Blood-Thumbnail.jpg" },
        { img: "./images/Planetary_Go-Thumbnail.jpg" },
        { img: "./images/Dead-Thumbnail.jpg" },
        { img: "./images/Cancer-Thumbnail.jpg" },
        { img: "./images/Mama-Thumbnail.jpg" },
        { img: "./images/Sleep-Thumbnail.jpg" },
        { img: "./images/SING-Thumbnail.jpg" },
        { img: "./images/House_Of_Wolves-Thumbnail.jpg" },
        { img: "./images/This_Is_How_I_Disappear-Thumbnail.jpg" },
        { img: "./images/The_Light_Behind_Your_Eyes-Thumbnail.jpg" },
        { img: "./images/LongLive.png" },
        { img: "./images/FRANK-IERO.png" },
        { img: "./images/RAY-TORO.png" },
        { img: "./images/GERARD-WAY.png" },
        { img: "./images/MIKEY-WAY.png" },
    ];

    let currentPage = 1;
    const itemsPerPage = 20;
    const totalPages = Math.ceil(galleryData.length / itemsPerPage);
    
    const galleryContainer = document.getElementById("gallery-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageIndicator = document.getElementById("pageIndicator");

    function renderPage(page) {
        galleryContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToShow = galleryData.slice(start, end);

        itemsToShow.forEach(picture => {
            const card = document.createElement("a");
            card.href = "#";
            card.classList.add("text-decoration-none", "col");

            card.innerHTML = `
                <div class="card gallery-card">
                    <img src="${picture.img}" alt="My Chemical Romance" class="card-img-top">
                </div>
            `;
            galleryContainer.appendChild(card);
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
