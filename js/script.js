let hamburger_menu = document.getElementById("hamburger-menu");
let list_menu = document.getElementById("list-menu");
let menu_option = document.querySelectorAll(".menu-option");

hamburger_menu.addEventListener("click", function() {
    if(list_menu.style.top == "" || list_menu.style.top == "-63px") 
    {
        list_menu.style.top = "63px";
    }
    else 
    {
        list_menu.style.top = "-63px";
    }
});

menu_option.forEach(function(e) {
    e.addEventListener("click", function() {
        list_menu.style.top = "-63px";
    });
});