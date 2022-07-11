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
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
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
const getCourses = async () => {
    try {
        const response = await axios
            .get(coursesAPI);
        return renderCourses(response.data);
    }
    catch (error) {
        alert(error)
    }
}

const renderStartRate = (count, type) => {
    let html = "";
    for (let i = 0; i < count; i++) {

        html += `
             <li class="flex">
                <i class="bx ${type === "fill" ? "bxs-star" : "bx-star"}"></i>
            </li>
        `
    }
    return html;
}
// render courses
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
                                alt="image-course"
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
                                ${renderStartRate(+course.rate, "fill")}
                                ${renderStartRate(5 - (+course.rate), "stock")}
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
                        <div>
                            <ul class="flex">
                                <!-- viewer -->
                                <li class="mr-[20px] text-third text-sm">
                                    <a href="#">
                                        <i class="fa-solid fa-user mr-[5px]"></i> 
                                        ${course.total_enrolled}
                                    </a>
                                </li>
                                <!-- likes -->
                                <li class="text-third text-sm">
                                    <a href="#">
                                        <i class="fa-solid fa-clock mr-[5px]"></i>${course.duration}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- course-teacher -->
                        <div class="flex items-center py-[15px]">
                            <!-- avatar-teacher -->
                            <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                <img
                                    class="w-full h-full object-cover"
                                    src="assets/image/student_1.jpg"
                                    alt="avatar-teacher"
                                />
                            </div>
                            <!-- teacher-name -->
                            <div>
                                <a href="#">
                                    <h6
                                        class="text-primary text-sm font-bold ml-[10px] hover:text-secondary transition-all ease-linear duration-250"
                                    >
                                        <span class="opacity-50 font-medium">by</span> ${course.teacher}
                                        <span class="opacity-50 font-medium">In</span> ${course.categories}
                                    </h6>
                                </a>
                            </div>
                        </div>
                        <!-- course-price -->
                        <div
                            class="flex justify-between items-center pt-[15px] relative befor:content-[''] before:absolute before:h-[1px] before:left-2/4 before:-translate-x-2/4 before:top-0 before:w-[calc(100%+60px)] before:bg-third"
                        >
                            <span class="text-primary font-bold">${course.price ? `$${course.price}` : `Free`}</span>
                            <button>
                                <i class="fa-solid fa-cart-plus text-secondary mr-[5px]"></i>   
                                <span class="text-third font-bold hover:text-secondary transition-all ease-linear duration-250 ">Get Enrolled</span>
                            </button>
                        </div>
                    </div>
                </div>
            `
        });
        coursesList.innerHTML = htmls.join("");
        // slick
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
            <div>
                <span>"No Course"</span>
            </div >
        `
    }
}
// effect menu mobile tablet
const handleSliderMenu = (ele) => {
    $(ele).slideToggle();
}
// fix menu
const handleScrollFixedMenu = () => {

    window.addEventListener("scroll", () => {
        const navigationBar = document.querySelector(".navigation-bar");
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 200) {
            navigationBar.classList.add("fixed-menu");
        }
        else {
            navigationBar.classList.remove("fixed-menu");
        }
    })
}
// click search
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
// play video
const handlePlayVideo = () => {
    const btnPlayVideo = document.querySelector(".btn-play-video");
    const modalVideo = document.querySelector(".modal-video");
    const video = document.querySelector("iframe");

    btnPlayVideo.addEventListener("click", () => {
        modalVideo.classList.remove("hidden");
    })
    video.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    modalVideo.addEventListener("click", () => {
        let src = video.src;
        video.src = src;
        modalVideo.classList.add("hidden");
    })
}
// back to top
const showScrollBackToTop = () => {
    const btnBackToTop = document.querySelector(".btn-back-to-top");
    window.addEventListener("scroll", () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 200) {
            btnBackToTop.classList.remove("hidden");
        }
        else {
            btnBackToTop.classList.add("hidden");
        }
    })
}
// click back to top
const handleClickBackToTop = () => {
    const btnBackToTop = document.querySelector(".btn-back-to-top");
    btnBackToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
// load page
window.onload = () => {
    getCourses();
    handleScrollFixedMenu();
    handleSearch();
    handlePlayVideo();
    showScrollBackToTop();
    handleClickBackToTop();
}



