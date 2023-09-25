// عند تحميل الصفحة بالكامل
window.addEventListener('load', function () {
    // ابحث عن عنصر الشاشة التي تحتوي على رمز التحميل وقم بإخفائه
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
    
});
///////////////////////////////     show slider department     ///////////////////////////////

// ابحث عن عناصر السلايد والأزرار في الصفحة
const departmentSlider = document.querySelector('.slider-department');
const nextDepartmentButton = document.querySelector('.next-button');
const prevDepartmentButton = document.querySelector('.prev-button');

// قائمة بالعناصر التي ستظهر في السلايد، مع تصنيفاتها وعناوينها
const departmentSlideItems = [
    { class: 'department history', title: 'تاريخ' },
    { class: 'department literature', title: 'أدب' },
    { class: 'department poetry', title: 'شعر' },
    { class: 'department arts', title: 'فنون' },
    { class: 'department philosophy', title: 'فلسفة' }
];

// متغير لتتبع السلايد الحالي
let currentDepartmentIndex = 0;

// عدد الشرائح التي ستعرض في المرة الواحدة
const numberDepartmentSlides = 5;

// دالة لعرض الشرائح الحالية
function showDepartmentSlides() {
    let departmentSlideHTML = '';
    for (let i = currentDepartmentIndex; i < currentDepartmentIndex + numberDepartmentSlides; i++) {
        // استخراج الشريحة الحالية من القائمة وإضافتها إلى عنصر السلايد
        const department = departmentSlideItems[i % departmentSlideItems.length];
        departmentSlideHTML += `<div class="${department.class}"><h3>${department.title}</h3></div>`;
    }
    // عرض الشرائح في عنصر السلايد
    if(departmentSlider)departmentSlider.innerHTML = departmentSlideHTML;
    
}

// دالة لعرض الشرائح السابقة
function showPrevDepartmentSlide() {
    currentDepartmentIndex = (currentDepartmentIndex - 1 + departmentSlideItems.length) % departmentSlideItems.length;
    showDepartmentSlides();
}

// دالة لعرض الشرائح التالية
function showNextDepartmentSlide() {
    currentDepartmentIndex = (currentDepartmentIndex + 1) % departmentSlideItems.length;
    showDepartmentSlides();
}

// تعيين معالجي الحدث للأزرار التالية والسابقة
if(nextDepartmentButton)nextDepartmentButton.addEventListener('click', showNextDepartmentSlide);
if(prevDepartmentButton)prevDepartmentButton.addEventListener('click', showPrevDepartmentSlide);

// عرض الشرائح الأولى عند تحميل الصفحة
showDepartmentSlides();


///////////////////////////////     show slider department     ///////////////////////////////
// ابحث عن عناصر الشرائح والأزرار السابقة والتالية في الصفحة
const mostReadSlides = document.querySelectorAll(".slide-mostRead");
const prevMostReadBtn = document.querySelector(".most-read .prev-btn");
const nextMostReadBtn = document.querySelector(".most-read .next-btn");

// متغير لتتبع الشرائح الحالية
let currentMostReadIndex = 0;

// عدد الشرائح التي ستعرض في المرة الواحدة
let numMostReadSlidesToShow = getNumMostReadSlidesToShow();

// دالة لتحديد عدد الشرائح المعروضة بناءً على حجم الشاشة الحالي
function getNumMostReadSlidesToShow() {
    if (window.innerWidth < 420) {
        return 1; // عرض شريحة واحدة عندما يكون عرض الشاشة أقل من 420 بكسل
    } else if (window.innerWidth < 1200) {
        return 2; // عرض شريحتين عندما يكون عرض الشاشة أقل من 1200 بكسل
    } else {
        return 3; // عرض ثلاث شرائح عندما يكون عرض الشاشة أكبر من 1200 بكسل
    }
}

// دالة لعرض الشرائح الحالية
function showMostReadSlides() {
    mostReadSlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    for (let i = currentMostReadIndex; i < currentMostReadIndex + numMostReadSlidesToShow; i++) {
        if (i < mostReadSlides.length) {
            mostReadSlides[i].classList.add("active");
        }
    }
}

// دالة لعرض الشرائح السابقة
function prevMostReadSlide() {
    currentMostReadIndex = Math.max(currentMostReadIndex - numMostReadSlidesToShow, 0);
    showMostReadSlides();
}

// دالة لعرض الشرائح التالية
function nextMostReadSlide() {
    currentMostReadIndex = Math.min(currentMostReadIndex + numMostReadSlidesToShow, mostReadSlides.length - numMostReadSlidesToShow);
    showMostReadSlides();
}

// تعيين معالجي الحدث للأزرار السابقة والتالية
if(prevMostReadBtn)prevMostReadBtn.addEventListener("click", prevMostReadSlide);
if(nextMostReadBtn)nextMostReadBtn.addEventListener("click", nextMostReadSlide);



// تحديث عدد الشرائح المعروضة عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
    numMostReadSlidesToShow = getNumMostReadSlidesToShow();
    showMostReadSlides();
});

// عرض الشرائح الأولى عند تحميل الصفحة
showMostReadSlides();


///////////////////////////////     show slider department     ///////////////////////////////
// ابحث عن عناصر الشرائح والأزرار السابقة والتالية في صفحة الفريق
const teamSlides = document.querySelectorAll(".slide-team");
const prevTeamBtn = document.querySelector(".work-team .prev-btn");
const nextTeamBtn = document.querySelector(".work-team .next-btn");

// متغير لتتبع الشرائح الحالية
let currentTeamIndex = 0;

// عدد الشرائح التي ستعرض في المرة الواحدة
let numTeamSlidesToShow = getNumTeamSlidesToShow();

// دالة لتحديد عدد الشرائح المعروضة بناءً على حجم الشاشة الحالي
function getNumTeamSlidesToShow() {
    if (window.innerWidth < 420) {
        return 1; // عرض شريحة واحدة عندما يكون عرض الشاشة أقل من 420 بكسل
    } else if (window.innerWidth < 650) {
        return 2; // عرض شريحتين عندما يكون عرض الشاشة أقل من 650 بكسل
    } else {
        return 3; // عرض ثلاث شرائح عندما يكون عرض الشاشة أكبر من 650 بكسل
    }
}

// دالة لعرض الشرائح الحالية
function showTeamSlides() {
    teamSlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    for (let i = currentTeamIndex; i < currentTeamIndex + numTeamSlidesToShow; i++) {
        if (i < teamSlides.length) {
            teamSlides[i].classList.add("active");
        }
    }
}

// دالة لعرض الشرائح السابقة
function prevTeamSlide() {
    currentTeamIndex = Math.max(currentTeamIndex - numTeamSlidesToShow, 0);
    showTeamSlides();
}

// دالة لعرض الشرائح التالية
function nextTeamSlide() {
    currentTeamIndex = Math.min(currentTeamIndex + numTeamSlidesToShow, teamSlides.length - numTeamSlidesToShow);
    showTeamSlides();
}

// تحقق من وجود الأزرار قبل إضافة معالجي الحدث
if (prevTeamBtn) prevTeamBtn.addEventListener("click", prevTeamSlide);
if (nextTeamBtn) nextTeamBtn.addEventListener("click", nextTeamSlide);

// تحديث عدد الشرائح المعروضة عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
    numTeamSlidesToShow = getNumTeamSlidesToShow();
    showTeamSlides();
});

// عرض الشرائح الأولى عند تحميل الصفحة
showTeamSlides();
