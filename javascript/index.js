const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    })
})

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.top = "-110%"
    document.body.style.overflow = "auto";
}