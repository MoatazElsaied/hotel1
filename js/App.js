//show password
// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

// $(window).scroll(function () {

//     $scrollpos = $(this).scrollTop();
//     if ($scrollpos >= 800) {
//         $('.scroll-top-btn').css({ 'opacity': '1' });

//     }
//     else {
//         $('.scroll-top-btn').css({ 'opacity': '0' });
//     }


// });

// $('.scroll-top-btn').click(function () {




//     $('html,body').animate({ scrollTop: '0' }, 1000);

//     return false;

// });


// $('.toggler-bnt').click(function () {
//     $('.toggler-bnt').toggleClass('active');
// });


// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// });


// $(window).scroll(function () {

//     $scrollpos = $(this).scrollTop();
//     if ($scrollpos >= 2000) {
//         $('.scroll-top-btn').css({ 'opacity': '1' });

//     }
//     else {
//         $('.scroll-top-btn').css({ 'opacity': '0' });
//     }


// });

// $('.scroll-top-btn').click(function () {




//     $('html,body').animate({ scrollTop: '0' }, 1000);

//     return false;

// });
// $('.toggler-bnt').click(function () {
//     $('.toggler-bnt').toggleClass('active');
// });

var counted = 0;
$(window).scroll(function () {
    var oTop = $('.viewed').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        count = 1;
    }
});
 function func1() {
            document.getElementById('subscribe').style.display = "block";
        }
        function func2() {
            document.getElementById('subscribe').style.display = "none";
        }

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });


        $(window).scroll(function () {

            $scrollpos = $(this).scrollTop();
            if ($scrollpos >= 2000) {
                $('.scroll-top-btn').css({ 'opacity': '1' });
            }
            else {
                $('.scroll-top-btn').css({ 'opacity': '0' });
            }
        });
        $('.scroll-top-btn').click(function () {
            $('html,body').animate({ scrollTop: '0' }, 1000);
            return false;
        });





        $('.toggler-bnt').click(function () {
            $('.toggler-bnt').toggleClass('active');
        });

        var counted = 0;
        $(window).scroll(function () {
            var oTop = $('.viewed').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                });
                count = 1;
            }
        });
        $(function () {
            $(" .typed ").typed({
                strings: [" Relaxing Place.", " Wonderful Place.",],
                // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
                stringsElement: null,
                // typing speed
                typeSpeed: 30,
                // time before typing starts
                startDelay: 1200,
                // backspacing speed
                backSpeed: 20,
                // time before backspacing
                backDelay: 500,
                // loop
                loop: true,
                // false = infinite
                loopCount: 5,
                // show cursor
                showCursor: false,
                // character for cursor
                cursorChar: " | ",
                // attribute to type (null == text)
                attr: null,
                // either html or text
                contentType: ' html ',
                // call when done callback function
                callback: function () { },
                // starting callback function before each string
                preStringTyped: function () { },
                //callback for every typed string
                onStringTyped: function () { },
                // callback for reset
                resetCallback: function () { }
            });
        });
