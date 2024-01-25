document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const sidebarMenu = document.querySelector(".sidebar-menu");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.classList.toggle('open');
        sidebarMenu.classList.toggle("active");
    });

    // Close or Hide Sidebar when Clicking Outside
    document.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        const isMenuToggle = event.target === menuToggle;
        const isSidebarMenu = sidebarMenu.contains(event.target);

        if (!isMenuToggle && !isSidebarMenu) {
            menuToggle.classList.remove('open');
            sidebarMenu.classList.remove("active");
        }
    });

    // Insert new Element before each .sub-menu
    const subMenus = document.querySelectorAll('.sub-menu');
    const subToggleHTML = `
        <span class="sub-toggle">
            <svg width="14" height="14" viewBox="0 0 8 16">
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
            </svg>
        </span>`;

    subMenus.forEach(function (subMenu) {
        subMenu.insertAdjacentHTML('beforebegin', subToggleHTML);
    });

    // Toggle .sub-toggle
    const subToggles = document.querySelectorAll(".sub-toggle");
    subToggles.forEach(function (subToggle) {
        subToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            this.classList.toggle('open');
        });
    });

    // Toggle .sub-menu.active
    subToggles.forEach(function (subToggle) {
        subToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            const subMenu = this.nextElementSibling;
            if (subMenu.clientHeight === 0 || subMenu.clientHeight === "") {
                subMenu.style.height = subMenu.scrollHeight + "px";
                setTimeout(function () {
                    subMenu.style.height = 'auto';
                }, 500);
            } else {
                subMenu.style.height = "0";
            }
        });
    });
});
