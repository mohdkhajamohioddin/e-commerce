let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = ('https://res.cloudinary.com/dc4wy7wvc/image/upload/v1676140578/121-1215503_sun-icon-white-sun-blue-background-removebg-preview_zccxwp.png');
        btnText.textContent = "Light";
    } else {
        btnIcon.src = 'https://res.cloudinary.com/dc4wy7wvc/image/upload/v1676138396/images-removebg-preview_tzmeag.png';
        btnText.textContent = "Dark";
    }
}