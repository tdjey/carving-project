'use strict';
//Полоса прокрутки сайта
function ProgessScroll() {
    let scrollHeight = document.documentElement.scrollHeight;
    let currentScroll = window.pageYOffset;
    scrollBar.style.width = (currentScroll) / (scrollHeight - document.documentElement.clientHeight - 1) * 100 + "%";
}

// Объявление массивов и переменных к след функции
let nav_arr = document.querySelectorAll(".header_list li"),
    sect_arr = document.querySelectorAll("section"),
    now_active = 0;


//Выделение заголовка в header
function lightCurrentSection() {
    for (let i = 0; i < sect_arr.length; i++) {
        if (sect_arr[i].getBoundingClientRect().top < 300 && sect_arr[i].getBoundingClientRect().top >= 0) {
            nav_arr[now_active].classList.remove("active");
            now_active = i;
            break;
        }
    }
    nav_arr[now_active].classList.add("active");
}


//Слайдер
let sliderWrapper = document.querySelector(".wrapper"),
    slides_arr = document.querySelectorAll(".slide");
console.log(Slider.offsetWidth);
console.log(Slider.offsetWidth * slides_arr.length);
sliderWrapper.style.width = Slider.offsetWidth * slides_arr.length + "px";
let slideNumber = 0;

function leftSlide() {
    slideNumber -= 1;
    if (slideNumber == Math.max(0, slideNumber)) {
        showNext();
    }
    slideNumber = Math.max(0, slideNumber);
}

function rightSlide() {
    slideNumber += 1;
    if (slideNumber == Math.min(slideNumber, slides_arr.length - 1)) {
        showNext();
    }
    slideNumber = Math.min(slideNumber, slides_arr.length - 1);
}

function showNext() {
    leftBtn.removeEventListener("click", leftSlide);
    rightBtn.removeEventListener("click", rightSlide);
    Slider.classList.remove("slide-shadow");
    console.log(slideNumber);
    setTimeout(function () {
        Slider.scrollLeft = Number(document.querySelector(".slide").offsetWidth) * (slideNumber);
        Slider.classList.add("slide-shadow");
        leftBtn.addEventListener("click", leftSlide);
        rightBtn.addEventListener("click", rightSlide);
    }, 1200);
}
leftBtn.addEventListener("click", leftSlide);
rightBtn.addEventListener("click", rightSlide);


//Смена цветовой темы
let currentTheme = false; //true-активна темная тема
themeBtn.addEventListener("click", function () {
    themeBtn.classList.toggle("right-side");
    if (currentTheme) {
        currentTheme = false;
        darkTheme.setAttribute("href", "");
    } else {
        currentTheme = true;
        darkTheme.setAttribute("href", "darktheme.css");
    }
})

//Калькулятор
//Объявление массивов цен
let arr_frez = ["Фанера", "Акрил(оргстекло)", "МДФ, ДВП, Мазонит, OSB"],
    arr_lazer = ["Фанера", "МДФ", "Пластик, акрил, оргстекло, ПЭТ, полистирол"],
    arr_frez_height = new Object(),
    arr_lazer_height = new Object();
arr_frez_height["Фанера"] = new Object();
arr_frez_height["Фанера"]["a3-4"] = 17;
arr_frez_height["Фанера"]["a6-8"] = 30;
arr_frez_height["Фанера"]["a9-10"] = 50;
arr_frez_height["Фанера"]["a12-16"] = 70;
arr_frez_height["Фанера"]["a18-21"] = 60;
arr_frez_height["Фанера"]["a22-27"] = 80;
arr_frez_height["Фанера"]["a30-40"] = 120;
arr_frez_height["Акрил(оргстекло)"] = new Object();
arr_frez_height["Акрил(оргстекло)"]["a1-4"] = 30;
arr_frez_height["Акрил(оргстекло)"]["a5-6"] = 45;
arr_frez_height["Акрил(оргстекло)"]["a8-10"] = 65;
arr_frez_height["Акрил(оргстекло)"]["a12"] = 90;
arr_frez_height["Акрил(оргстекло)"]["a15"] = 120;
arr_frez_height["МДФ, ДВП, Мазонит, OSB"] = new Object();
arr_frez_height["МДФ, ДВП, Мазонит, OSB"]["a<6"] = 31;
arr_frez_height["МДФ, ДВП, Мазонит, OSB"]["a8"] = 41;
arr_frez_height["МДФ, ДВП, Мазонит, OSB"]["a10"] = 44;
arr_frez_height["МДФ, ДВП, Мазонит, OSB"]["a12"] = 50;



arr_lazer_height["Фанера"] = new Object();
arr_lazer_height["Фанера"]["a1"] = 12;
arr_lazer_height["Фанера"]["a2"] = 13;
arr_lazer_height["Фанера"]["a3"] = 14;
arr_lazer_height["Фанера"]["a4"] = 16;
arr_lazer_height["Фанера"]["a6"] = 26;
arr_lazer_height["Фанера"]["a8"] = 35;
arr_lazer_height["Фанера"]["a10"] = 43;
arr_lazer_height["Фанера"]["a18"] = 169;
arr_lazer_height["МДФ"] = new Object();
arr_lazer_height["МДФ"]["a<6"] = 31;
arr_lazer_height["МДФ"]["a8"] = 41;
arr_lazer_height["МДФ"]["a10"] = 44;
arr_lazer_height["МДФ"]["a12"] = 50;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"] = new Object();
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a<1"] = 20;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a1.5"] = 23;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a2"] = 25;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a3"] = 28;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a4"] = 35;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a5"] = 38;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a6"] = 45;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a8"] = 65;
arr_lazer_height["Пластик, акрил, оргстекло, ПЭТ, полистирол"]["a10"] = 80;
//Конец объявления массивов цен


FrezType.addEventListener("click", function () {
    depthList.innerHTML = "<option>Пожалуйста, выберите материал</option>";
    materialList.innerHTML = "<option>Не выбран</option>";
    for (let i = 0; i < arr_frez.length; i++) {
        let new_material = document.createElement("option");
        new_material.innerHTML = arr_frez[i];
        materialList.appendChild(new_material);
    }
});

LazerType.addEventListener("click", function () {
    depthList.innerHTML = "<option>Пожалуйста, выберите материал</option>";
    materialList.innerHTML = "<option>Не выбран</option>";
    for (let i = 0; i < arr_lazer.length; i++) {
        let new_material = document.createElement("option");
        new_material.innerHTML = arr_lazer[i];
        materialList.appendChild(new_material);
    }
});

materialList.addEventListener("change", function () {
    depthList.innerHTML = "<option>Не выбрана</option>";
    if (FrezType.checked) {
        for (let i in arr_frez_height[materialList.value]) {
            let new_elem = document.createElement("option");
            new_elem.innerHTML = i.slice(1);
            depthList.appendChild(new_elem)
        }
    } else {
        for (let i in arr_lazer_height[materialList.value]) {
            let new_elem = document.createElement("option");
            new_elem.innerHTML = i.slice(1);
            depthList.appendChild(new_elem)
        }
    }
});
calcBtn.addEventListener("click", function () {
    console.log(depthList.value);
    if (depthList.value != "Не выбрана" && depthList.value != "Пожалуйста, выберите материал") {
        console.log(1);
        console.log(place.value);
        console.log(1);
        if (FrezType.checked) {
            calcResult.innerHTML = Number(place.value) * arr_frez_height[materialList.value]["a" + depthList.value];
        }
        else{
            calcResult.innerHTML = Number(place.value) * arr_lazer_height[materialList.value]["a" + depthList.value];
        }
    }
});

//Вызов необходимых функций при прокруке страницы
document.addEventListener("scroll", function () {
    ProgessScroll();
    lightCurrentSection();
});
