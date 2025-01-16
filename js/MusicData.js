document.addEventListener("DOMContentLoaded", () => {
    const musicData = [
        { title: "The Foundation Of Decay", img: "./images/The_Foundation_Of_Decay-Thumbnail.png" },
        { title: "Teenagers", img: "./images/Teenagers-Thumbnail.jpg" },
        { title: "Welcome To The Black Parade", img: "./images/Welcome_To_The_Black_Parade-Thumbnail.jpg" },
        { title: "Famous Last Words", img: "./images/Famous_Last_Words-Thumbnail.jpg" },
        { title: "Helena", img: "./images/Helena-Thumbnail.jpg" },
        { title: "The Ghost Of You", img: "./images/The_Ghost_Of_You-Thumbnail.jpg" },
        { title: "I Don't Love You", img: "./images/I_Dont_Love_You-Thumbnail.jpg" },
        { title: "Disenchanted", img: "./images/Disenchanted-Thumbnail.jpg" },
        { title: "I'm Not Okay (I Promise)", img: "./images/Im_Not_Okay-Thumbnail.jpg" },
        { title: "Na Na Na", img: "./images/Na_Na_Na-Thumbnail.jpg" },
        { title: "Blood", img: "./images/Blood-Thumbnail.jpg" },
        { title: "Planetary (GO!)", img: "./images/Planetary_Go-Thumbnail.jpg" },
        { title: "Dead!", img: "./images/Dead-Thumbnail.jpg" },
        { title: "Cancer", img: "./images/Cancer-Thumbnail.jpg" },
        { title: "Mama", img: "./images/Mama-Thumbnail.jpg" },
        { title: "Sleep", img: "./images/Sleep-Thumbnail.jpg" },
        { title: "SING", img: "./images/SING-Thumbnail.jpg" },
        { title: "House of Wolves", img: "./images/House_Of_Wolves-Thumbnail.jpg" },
        { title: "This Is How I Disappear", img: "./images/This_Is_How_I_Disappear-Thumbnail.jpg" },
        { title: "The Light Behind Your Eyes", img: "./images/The_Light_Behind_Your_Eyes-Thumbnail.jpg" },
    ];

    let currentPage = 1;
    const itemsPerPage = 15;
    const totalPages = Math.ceil(musicData.length / itemsPerPage);
    
    const musicContainer = document.getElementById("music-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageIndicator = document.getElementById("pageIndicator");

    function renderPage(page) {
        musicContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToShow = musicData.slice(start, end);

        itemsToShow.forEach(song => {
            const card = document.createElement("a");
            card.href = "#";
            card.classList.add("text-decoration-none", "col");

            card.innerHTML = `
                <div class="card music-card">
                    <img src="${song.img}" alt="${song.title}" class="card-img-top">
                    <h3 class="card-title">${song.title}</h3>
                </div>
            `;
            musicContainer.appendChild(card);
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
