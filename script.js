// عند تحميل الصفحة بالكامل
window.addEventListener('load', function () {
    // ابحث عن عنصر الشاشة التي تحتوي على رمز التحميل وقم بإخفائه
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});

///////////////////////////////     show slider department     ///////////////////////////////

// // ابحث عن عناصر السلايد والأزرار في الصفحة
// const slider = document.querySelector('.slider-department');
// const nextButton = document.querySelector('.next-button');
// const prevButton = document.querySelector('.prev-button');

// // قائمة بالعناصر التي ستظهر في السلايد، مع تصنيفاتها وعناوينها
// const slideItems = [
//     { class: 'department history', title: 'تاريخ' },
//     { class: 'department literature', title: 'أدب' },
//     { class: 'department poetry', title: 'شعر' },
//     { class: 'department arts', title: 'فنون' },
//     { class: 'department philosophy', title: 'فلسفة' }
// ];

// // متغير لتتبع السلايد الحالي
// let currentIndex = 0;

// // عدد الشرائح التي ستعرض في المرة الواحدة
// const numberSlide = 5; 

// // دالة لعرض الشرائح الحالية
// function showSlides() {
//     let slideHTML = '';
//     for (let i = currentIndex; i < currentIndex + numberSlide; i++) {
//         // استخراج الشريحة الحالية من القائمة وإضافتها إلى عنصر السلايد
//         const department = slideItems[i % slideItems.length];
//         slideHTML += `<div class="${department.class}"><h3>${department.title}</h3></div>`;
//     }
//     // عرض الشرائح في عنصر السلايد
//     slider.innerHTML = slideHTML;
// }

// // دالة لعرض الشرائح السابقة
// function showPrevSlide() {
//     currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
//     showSlides();
// }

// // دالة لعرض الشرائح التالية
// function showNextSlide() {
//     currentIndex = (currentIndex + 1) % slideItems.length;
//     showSlides();
// }

// // تعيين معالجي الحدث للأزرار التالية والسابقة
// nextButton.addEventListener('click', showNextSlide);
// prevButton.addEventListener('click', showPrevSlide);

// // عرض الشرائح الأولى عند تحميل الصفحة
// showSlides();


///////////////////////////////     show slider department     ///////////////////////////////


        // const slides = document.querySelectorAll(".slide-mostRead");
        // const prevBtn = document.querySelector(".prev-btn");
        // const nextBtn = document.querySelector(".next-btn");

        // let currentIndex = 0;
        // let numSlidesToShow = getNumSlidesToShow();

        // function getNumSlidesToShow() {
        //     // قم بتحديد عدد الشرائح التي يجب عرضها بناءً على حجم الشاشة هنا
        //     // يمكنك استخدام window.innerWidth للحصول على عرض الشاشة
        //     // وقم بتحديد عدد الشرائح بناءً على احتياجاتك.
        //     if (window.innerWidth < 420) {
        //         return 1; // على سبيل المثال، قم بعرض شريحة واحدة عندما يكون عرض الشاشة أقل من 768 بكسل
        //     } else if (window.innerWidth < 650) {
        //         return 2; // عرض شريحتين عندما يكون عرض الشاشة أقل من 1200 بكسل
        //     } else {
        //         return 3; // عرض ثلاث شرائح عندما يكون عرض الشاشة أكبر من 1200 بكسل
        //     }
        // }

        // function showSlides() {
        //     slides.forEach((slide) => {
        //         slide.classList.remove("active");
        //     });

        //     for (let i = currentIndex; i < currentIndex + numSlidesToShow; i++) {
        //         if (i < slides.length) {
        //             slides[i].classList.add("active");
        //         }
        //     }
        // }

        // function prevSlide() {
        //     currentIndex = Math.max(currentIndex - numSlidesToShow, 0);
        //     showSlides();
        // }

        // function nextSlide() {
        //     currentIndex = Math.min(currentIndex + numSlidesToShow, slides.length - numSlidesToShow);
        //     showSlides();
        // }

        // prevBtn.addEventListener("click", prevSlide);
        // nextBtn.addEventListener("click", nextSlide);

        // // تحديث عدد الشرائح المعروضة عند تغيير حجم الشاشة
        // window.addEventListener("resize", () => {
        //     numSlidesToShow = getNumSlidesToShow();
        //     showSlides();
        // });

        // showSlides();

///////////////////////////////     show slider department     ///////////////////////////////

const slides = document.querySelectorAll(".slide-team");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let numSlidesToShow = getNumSlidesToShow();

function getNumSlidesToShow() {
    // قم بتحديد عدد الشرائح التي يجب عرضها بناءً على حجم الشاشة هنا
    // يمكنك استخدام window.innerWidth للحصول على عرض الشاشة
    // وقم بتحديد عدد الشرائح بناءً على احتياجاتك.
    if (window.innerWidth < 768) {
        return 1; // على سبيل المثال، قم بعرض شريحة واحدة عندما يكون عرض الشاشة أقل من 768 بكسل
    } else if (window.innerWidth < 1200) {
        return 2; // عرض شريحتين عندما يكون عرض الشاشة أقل من 1200 بكسل
    } else {
        return 3; // عرض ثلاث شرائح عندما يكون عرض الشاشة أكبر من 1200 بكسل
    }
}

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    for (let i = currentIndex; i < currentIndex + numSlidesToShow; i++) {
        if (i < slides.length) {
            slides[i].classList.add("active");
        }
    }
}

function prevSlide() {
    currentIndex = Math.max(currentIndex - numSlidesToShow, 0);
    showSlides();
}

function nextSlide() {
    currentIndex = Math.min(currentIndex + numSlidesToShow, slides.length - numSlidesToShow);
    showSlides();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// تحديث عدد الشرائح المعروضة عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
    numSlidesToShow = getNumSlidesToShow();
    showSlides();
});

showSlides();
