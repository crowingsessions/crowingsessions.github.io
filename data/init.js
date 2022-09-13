/**
 * Just to save some lines and prepare all basic interactions.
 */
function initPages() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#mainHeaderDiv").addClass("scrolled");
        } else {
            $("#mainHeaderDiv").removeClass("scrolled");
        }
    });

    $(".nav--item").on("click", function () {
        $(".main--element").removeClass("active");
        $(".main--element[id='" + $(this).data("main") + "']").addClass("active");
        $(".nav--item").removeClass("active");
        $(this).addClass("active");
        document.title = "Crowing sessions - " + $(this).attr("title");
    });

    let playAttempt = setInterval(
        () => {
            $("#audioCrow")[0].play().then(
                () => {
                    $("#audioCrow")[0].muted = false;
                    clearInterval(playAttempt);
                }
            )
                .catch(
                    (error) => { }
                );
        }, 3000
    );

    /* prepare speakers and sessions */
    prepareSpeakers();
    prepareSessions();
    
    $(".huge-title").animate({ "opacity": 1 }, 1000, function () {
        $("#landingBrandDiv").animate({ "opacity": 1 }, 1000, function () {
            $("#mainHeader").animate({ "opacity": 1 }, 1000);
        });
    });

    $(".speaker--anchor").on("click", function () {
        $(".main--element").removeClass("active");
        $(".main--element[id='mainSpeakersElement']").addClass("active");
        $(".nav--item").removeClass("active");
        $(".nav--item[data-main='mainSpeakersElement'").addClass("active");
        document.title = "Crowing sessions - Speakers";
    });
  
    $(".session--anchor").on("click", function () {
        $(".main--element").removeClass("active");
        $(".main--element[id='mainSessionsElement']").addClass("active");
        $(".nav--item").removeClass("active");
        $(".nav--item[data-main='mainSessionsElement'").addClass("active");
        document.title = "Crowing sessions - Sessions";
    });

    $(".crow--the--singer").on("click", function () {
        $("#audioCrow")[0].play();
    });
}