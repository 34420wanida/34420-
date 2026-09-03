// =====================================================
// แสดงปีปัจจุบันใน Footer
// =====================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// Fade In Animation เมื่อ Scroll
// =====================================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("fade-in");

    observer.observe(section);

});


// =====================================================
// Console
// =====================================================

console.log(
    "Welcome to Wanida's Pastel Pharmacy Portfolio! 💗💙💜💊"
);
