document.addEventListener("DOMContentLoaded", () => {

    isClicked = false;

    $(document).ready(function(){

        $(".name02").animate({
            bottom: 0
        }, 800);

        $(".circle").click(function() {
            // $('html, body').animate({scrollTop : '800'}, 800);

            $('html, body').animate({
                scrollTop: $("#intro").offset().top + 1
            }, 800);

            $(".circle").css("display", "none");
            $(".nav-text").css("display", "none")
        });



        $(window).scroll(function() {

            var scroll = $(window).scrollTop();

                // if ((scroll >= 750) && (scroll < 801)) {
                //     $("#noti").css("display", "flex");
                // }

                if ((scroll >= $(
                    '#intro').offset().top) && (scroll < $('#intro').offset().top) + 10) {

                        $("#noti").css("display", "flex");
                        $("#noti").css("display", "-webkit-flex");
                  }


                // if ((scroll >= 1553) && (scroll < 2000)) {
                //     $(".title-box").css("-webkit-animation", "bounceIn 450ms ease-in");
                //     $(".title-box").css("animation", "bounceIn 450ms ease-in");
                //     $(".title-box").css("display", "initial");
                //     $("#noti").css("display", "none");

                // }

                if (scroll >= $('#intro').offset().top + 10) {
                    $("#noti").css("display", "none");
                }

                if (scroll >= $('#title').offset().top - 100) {
                    $(".title-box").css("animation", "bounceIn 450ms ease-in");
                    $(".title-box").css("-webkit-animation", "bounceIn 450ms ease-in");
                    $(".title-box").css("-moz-animation", "bounceIn 450ms ease-in");
                    $(".title-box").css("-o-animation", "bounceIn 450ms ease-in");
                    $(".title-box").css("display", "initial");
                    // $("#noti").css("display", "none");
                }

                // if ((scroll >= 2352) && (scroll < 3153)) {
                //     $(".dialog-square").fadeTo(800, 1);
                // }

                if (scroll >= $('#definition').offset().top - 100)  {
                        $(".dialog-square").fadeTo(400, 1);
                }

                // if ((scroll >= 3153) && (scroll < 4018)) {
                //     $(".phone-text").fadeTo(800, 1);
                // }

                if (scroll >= $('#danger').offset().top -100) {


                    $(".phone").animate({
                        marginLeft : '7vw',
                        opacity: '1'
                    }, 800);

                    $(".phone-text").fadeTo(800, 1);
                }


                // if ((scroll >= 4018) && (scroll < 4918)) {
                //     $(".type1").animate({
                //         left : '3vw',
                //         opacity: '1'
                //     }, 800);
                //     $(".type2").delay(800).animate({
                //         left : '9vw',
                //         opacity: '1'
                //     }, 800);
                //     $(".type3").delay(1600).animate({
                //         left : '9vw',
                //         opacity: '1'
                //     }, 800);
                //     $(".type4").delay(2400).animate({
                //         left : '3vw',
                //         opacity: '1'
                //     }, 800);
                // }

                if (scroll >= $('#types').offset().top -100 ) {

                        $(".type1").animate({
                            left : '0vw',
                            opacity: '1'
                        }, 500);
                        $(".type2").delay(800).animate({
                            left : '3vw',
                            opacity: '1'
                        }, 500);
                        $(".type3").delay(1600).animate({
                            left : '3vw',
                            opacity: '1'
                        }, 500);
                        $(".type4").delay(2400).animate({
                            left : '0vw',
                            opacity: '1'
                        }, 500);

                }

                if (scroll >= $('#data').offset().top -100 ) {

                    $(".data-list1").animate({
                        opacity : '1',
                    });

                    $(".data-content1").animate({
                        left : '0',
                        opacity : '1',
                    }, 500);

                    $(".data-content2").delay(800).animate({
                        left : '0',
                        opacity : '1',
                    }, 500);

                    $(".data-content3").delay(1600).animate({
                        left : '0',
                        opacity : '1',
                    }, 500);

                    $(".data-content4").delay(2400).animate({
                        left : '0',
                        opacity : '1',
                    }, 500);
                }

                if (scroll >= $('#help').offset().top -100 ) {

                    $(".help-card1").animate({
                        left : '15vw',
                        opacity : '1',
                    }, 500);

                    $(".help-card2").delay(500).animate({
                        left : '10vw',
                        opacity : '1',
                    }, 500);

                    $(".help-card3").delay(1000).animate({
                        left : '12vw',
                        opacity : '1',
                    }, 500);

                    $(".help-card4").delay(1500).animate({
                        left : '59vw',
                        opacity : '1',
                    }, 500);

                    $(".help-card5").delay(2000).animate({
                        left : '68vw',
                        opacity : '1',
                    }, 500);

                    $(".help-card6").delay(2500).animate({
                        left : '57vw',
                        opacity : '1',
                    }, 500);
                }


            console.log($(window).scrollTop());

        });


        // $(window).on('scroll', function() {
        //     if ($(this).scrollTop() >= $('.intro').position().top) {
        //         $("#noti").css("display", "flex");
        //         $("noti").css("display", "-webkit-flex")
        //     }
        //   })


          $("#noti").click(function() {
            $("#noti").css("display", "none");
            $("#chat").css("display", "flex");
            $("#chat").css("display", "-webkit-flex");
            $("#noti").css("opacity", 0);
            // $("#noti").css("z-index", 1);
        });


        // console.log($(window).scrollTop());


        $(".explore").click(function() {
            // $('html, body').animate({scrollTop : '1554'}, 800);
            $('html, body').animate({
                scrollTop: $("#title").offset().top
            }, 800);
            $(".title-bg").fadeTo(800, 1);
            // $("#noti").css("display", "none");
            // $("#noti").css("opacity", 0);
            // $("#noti").css("z-index", 1);

        });





        $(".title-box").click(function() {
            $('html, body').css("overflow-y", "visible");

            $(".title-box").css("transform", "scale(0)");
            $(".title-box").css("-webkit-transform", "scale(0)");
            $(".title-box").css("-ms-transform", "scale(0)");
            $(".title-box").css("-moz-transform", "scale(0)");
            $(".title-box").css("-o-transform", "scale(0)");

            $(".title-box").css("transition-duration", "300ms");
            $(".title-box").css("-webkit-transition-duration", "300ms");
            $(".title-box").css("-moz-transition-duration", "300ms");
            $(".title-box").css("-o-transition-duration", "300ms");

            $("button").css("display", "initial");
            $(".typing1").css("display", "block");
            $(".typing2").css("display", "block");
            $(".typing2").delay(1800).fadeTo(0, 1);
            $(".typing3").css("display", "block");
            $(".typing3").delay(5900).fadeTo(0, 1);
            $(".scrolldown span").css("display", "block");
            // $(".typing-msg3").css("display", "block");
        });

        $("button").click(function() {
            $('html, body').animate({scrollTop : '0'}, 800);
        });


        // $(".data-button2").click(function() {

        //     $(".data-button1").css("background-color", "rgb(158, 158, 158)");
        //     $(".data-button2").css("background-color", "rgb(199, 199, 199)");

        //     $(".data-list1").fadeTo(0, 0);
        //     $(".data-list1").css("left", "3vw");
        //     $(".data-list1").css("display", "none");

        //     $(".data-list2").css("display", "flex");
        //     $(".data-list2").animate({
        //         left : 0,
        //         opacity : 1,
        //     }, 400);

        // })

        // $(".data-button1").click(function() {

        //     $(".data-list2").css("display", "none");


        //     $(".data-button1").css("background-color", "rgb(199, 199, 199)");
        //     $(".data-button2").css("background-color", "rgb(158, 158, 158)");

        //     $(".data-list2").css("left", '3vw');
        //     $(".data-list2").fadeTo(0, 0);


        //     $(".data-list1").css("display", "flex");
        //     $(".data-list1").animate({
        //         left : 0,
        //         opacity : 1,
        //     }, 400);

        //     isClicked = true;


        // });


        $(".data-button").click(function() {
            if ( isClicked === false ) {
                isClicked = true;

                // $(".data-list2").css("display", "flex");

                $(".data-list2").removeClass("displayed2");

                $(".data-list2").addClass("displayed1");


                $(".data-button1").css("background-color", "rgb(158, 158, 158)");
                $(".data-button2").css("background-color", "rgb(199, 199, 199)");

                $(".data-list1").fadeTo(0, 0);
                // $(".data-list1").css("left", "3vw");
                $(".data-list1").css("display", "none");

                // $(".data-list2").animate({
                //     left : 0,
                //     opacity : 1,
                // });

                $(".data-list2").css("opacity", 1);

                console.log("clicked again");
              }

            else {
                isClicked = false;

                $(".data-list2").removeClass("displayed1");

                $(".data-list2").addClass("displayed2");

                // $(".data-list2").attr( "style", "display: none !important;" )


                // $(".data-button1").css("background-color", "rgb(199, 199, 199)");
                // $(".data-button2").css("background-color", "rgb(158, 158, 158)");

                // $(".data-list2").css("left", '3vw');
                $(".data-list2").fadeTo(0, 0);


                $(".data-list1").css("display", "flex");
                $(".data-list1").css("display", "-webkit-flex");
                // $(".data-list1").animate({
                //     left : 0,
                //     opacity : 1,
                // });

                $(".data-list1").css("opacity", 1);

                console.log("clicked");
              }
        });


        $(".help-card1 .face1").on('mouseenter', function(){
            $(".help-card1 .face1").css("border-radius", "20px 20px 0 0");
            // $(".help-card1 .face1").animate({
            //     borderRadius : '20px 20px 0 0'
            // }, 400)
            $(".help-card1 .face2").fadeTo(400, 1);
        });

        $(".help-card1 .face1").on('mouseleave', function(){
            $(".help-card1 .face1").css("border-radius", "20px");
            $(".help-card1 .face2").fadeTo(400, 0);
        });

        $(".help-card2 .face1").on('mouseenter', function(){
            $(".help-card2 .face1").css("border-radius", "20px 20px 0 0");
            $(".help-card2 .face2").fadeTo(400, 1);
        });

        $(".help-card2 .face1").on('mouseleave', function(){
            $(".help-card2 .face1").css("border-radius", "20px");
            $(".help-card2 .face2").fadeTo(400, 0);
        });

        $(".help-card3 .face1").on('mouseenter', function(){
            $(".help-card3 .face1").css("border-radius", "20px 20px 0 0");
            $(".help-card3 .face2").fadeTo(400, 1);
        });

        $(".help-card3 .face1").on('mouseleave', function(){
            $(".help-card3 .face1").css("border-radius", "20px");
            $(".help-card3 .face2").fadeTo(400, 0);
        });

        $(".help-card4 .face1").on('mouseenter', function(){
            $(".help-card4 .face1").css("border-radius", "20px 20px 0 0");
            $(".help-card4 .face2").fadeTo(400, 1);
        });

        $(".help-card4 .face1").on('mouseleave', function(){
            $(".help-card4 .face1").css("border-radius", "20px");
            $(".help-card4 .face2").fadeTo(400, 0);
        });

        $(".help-card5 .face1").on('mouseenter', function(){
            $(".help-card5 .face1").css("border-radius", "20px 20px 0 0");
            $(".help-card5 .face2").fadeTo(400, 1);
        });

        $(".help-card5 .face1").on('mouseleave', function(){
            $(".help-card5 .face1").css("border-radius", "20px");
            $(".help-card5 .face2").fadeTo(400, 0);
        });

        $(".help-card6 .face1").on('mouseenter', function(){
            $(".help-card6 .face1").css("border-radius", "20px 20px 0 0");
            $(".help-card6 .face2").fadeTo(400, 1);
        });

        $(".help-card6 .face1").on('mouseleave', function(){
            $(".help-card6 .face1").css("border-radius", "20px");
            $(".help-card6 .face2").fadeTo(400, 0);
        });


        // $(".help-card1 .face1").on('mouseenter', function(){
        //     $(".help-card1 .face1").css("border-radius", "20px 20px 0 0");
        //     $(".help-card1 .face2").fadeTo(400, 1);
        // });

        // $(".help-card1 .face1").on('mouseleave', function(){
        //     $(".help-card1 .face1").css("border-radius", "20px");
        //     $(".help-card1 .face2").css("opacity", 0)
        // });


        // $(".help-card1 .face1").click(function() {
        //     if ( isClicked === false ) {
        //         isClicked = true;

        //         $(".help-card1 .face2").fadeTo(200, 1);
        //         $(".help-card1 .face1").css("border-radius", "20px 20px 0 0");

        //         console.log("clicked again");
        //       }

        //     else {
        //         isClicked = false;

        //         $(".help-card1 .face2").fadeTo(200, 0);
        //         $(".help-card1 .face1").css("border-radius", "20px");

        //         console.log("clicked");
        //       }
        // });





        history.scrollRestoration = "manual";

        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
        });

    });


})
