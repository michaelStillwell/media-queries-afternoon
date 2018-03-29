function toggleHamburger() {
    window.innerWidth >= 700 ? document.getElementById('menu-toggle').checked = false : document.getElementById('menu-toggle').checked = !document.getElementById('menu-toggle').checked;
}

function goTo(num) {
    window.scrollTo(0, (window.innerHeight * num) - (window.innerHeight * .25));
}