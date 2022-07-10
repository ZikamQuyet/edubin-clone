$(document).ready(function () {
    $('.slider-banner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnHover: false,
        prevArrow: "<span class='arrow prev-arrow'><i class='fa-solid fa-angle-left'></i></span>",
        nextArrow: "<span class='arrow next-arrow'><i class='fa-solid fa-angle-right'></i></span>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});


$(document).ready(function () {
    $('.slider-category').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<span class='arrow prev-arrow'><i class='fa-solid fa-angle-left'></i></span>",
        nextArrow: "<span class='arrow next-arrow'><i class='fa-solid fa-angle-right'></i></span>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false
                }
            }

        ]
    });
});


//  
$('.patnar-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,

    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // dots: false
            }
        },
        // {
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         arrows: false
        //     }
        // },
    ]
});
$('.feedback-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: false
            }
        },
        // {
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         arrows: false
        //     }
        // },
    ]
});

// render course
const coursesAPI = "https://60d4611a61160900173cb070.mockapi.io/courses";
const getCourses = () => {
    axios
        .get(coursesAPI)
        .then(res => {
            console.log(res.data);
            renderCourses(res.data);
        })
        .catch(err => console.log(err.message));
}
const renderStartRate = (count) => {
    let html = "";
    for (let i = 0; i < count; i++) {
        html += `
             <li class="flex">
                <i class="bx bxs-star"></i>
            </li>
        `
    }
    return html;
}
const renderNoStartRate = (count) => {
    let html = "";
    for (let i = 0; i < count; i++) {
        html += `
             <li class="flex">
                <i class="bx bx-star"></i>
            </li>
        `
    }
    return html;
}

const renderCourses = (courses) => {
    const coursesList = document.querySelector(".courses-list");
    if (courses.length > 0) {
        let htmls = courses.map((course) => {
            return `
                <!-- course-card -->
                <div
                class="relative bg-white mx-[15px] rounded-[5px] overflow-hidden group"
                >
                <!-- course-image-vs-price -->
                <div>
                    <div class="h-[250px] overflow-hidden">
                    <img
                        src="${course.image}"
                        alt=""
                        class="w-full h-full object-cover group-hover:scale-125 transition-all ease-linear duration-250"
                    />
                    </div>
                    <!-- course-tag-price -->
                    <div
                    class="text-sm text-white font-bold bg-primary rounded-[3px] px-[10px] py-[5px] absolute top-[10px] left-[10px]"
                    >
                        ${course.level}
                    </div>
                    <div
                    class="text-sm text-primary font-bold bg-white rounded-[3px] px-[10px] py-[5px] absolute top-[10px] right-[10px]"
                    >
                    <i class="fa-brands fa-font-awesome"></i>
                    </div>
                </div>

                <!--course-content-->
                <div class="p-[30px]">
                    <!-- course ranking -->
                    <div class="flex items-center">
                    <!-- start -->
                    <ul
                        class="flex items-center text-secondary mr-[10px] text-[18px]"
                    >
                       ${renderStartRate(+course.rate)}
                       ${renderNoStartRate(5 - (+course.rate))}
                    </ul>
                    <!-- total-reviews -->
                    <span class="text-[13px]">${course.rate}(${course.rate_quantity})</span>
                    </div>
                    <!-- course-title -->
                    <div>
                    <a href="#">
                        <h4
                        class="text-xl font-bold pt-[15px] pb-[20px] hover:text-secondary transition-all ease-linear duration-250 relative"
                        >
                            ${course.name}
                        </h4>
                    </a>
                    </div>
                    <!-- viewer -->
                    <div class="">
                    <ul class="flex">
                        <!-- viewer -->
                        <li class="mr-[20px] text-[#8a8a8a] text-sm">
                        <a href="#"
                            ><i class="fa-solid fa-user mr-[5px]"></i> 
                            ${course.total_enrolled}
                        </a>
                        </li>
                        <!-- likes -->
                        <li class="text-[#8a8a8a] text-sm">
                        <a href="#"
                            ><i class="fa-solid fa-clock mr-[5px]"></i>${course.duration}</a
                        >
                        </li>
                    </ul>
                    </div>
                    <!-- course-teacher -->
                    <div class="flex   items-center py-[15px]">
                    <!-- avatar-teacher -->
                    <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <img
                        class="w-full h-full object-cover"
                        src="assets/image/student_1.jpg"
                        alt=""
                        />
                    </div>
                    <!-- teacher-name -->
                    <div>
                        <a href="#"
                        ><h6
                            class="text-primary text-sm font-bold ml-[10px] hover:text-secondary transition-all ease-linear duration-250"
                        >
                            <span class="opacity-50 font-medium">by</span> ${course.teacher}
                            <span class="opacity-50 font-medium">In</span> ${course.categories}
                        </h6></a
                        >
                    </div>
                    </div>
                    <!-- course-price -->
                    <div
                    class="flex justify-between items-center pt-[15px] relative befor:content-[''] before:absolute before:h-[1px] before:left-2/4 before:-translate-x-2/4 before:top-0 before:w-[calc(100%+60px)] before:bg-[#8a8a8a]"
                    >
                    <span class="text-primary font-bold">${course.price ? `$${course.price}` : `Free`}</span>
                    <button>
                        <i
                        class="fa-solid fa-cart-plus text-secondary mr-[5px] "
                        ></i>
                        <span class="text-[#8a8a8a] font-bold hover:text-secondary transition-all ease-linear duration-250 ">Get Enrolled</span>
                    </button>
                    </div>
                </div>
                </div>
            `
        })
        coursesList.innerHTML = htmls.join("");
        $(document).ready(function () {
            $('.courses-list').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: "<span class='arrow prev-arrow'><i class='fa-solid fa-angle-left'></i></span>",
                nextArrow: "<span class='arrow next-arrow'><i class='fa-solid fa-angle-right'></i></span>",
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,

                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                ]
            });
        });
    }
    else {
        coursesList.innerHTML = `
    <div div >
    <span>"No Course"</span>
            </div >
    `
    }
}

const handleSliderMenu = (ele) => {
    $(ele).slideToggle();
}
const handleSearch = () => {
    const btnSearch = document.querySelector(".btn-search");
    const modalSearch = document.querySelector(".modal-search");
    const btnCloseSearch = document.querySelector(".btn-close-search");
    const txtSearch = document.querySelector(".txt-search");
    btnSearch.addEventListener("click", () => {
        modalSearch.classList.remove("hidden");
        txtSearch.focus();
    });
    btnCloseSearch.addEventListener("click", () => {
        modalSearch.classList.add("hidden");
    })
}
window.onload = () => {
    getCourses();
    handleSearch();
}



