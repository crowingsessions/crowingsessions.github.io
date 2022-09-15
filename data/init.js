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
        openNavItem($(this).data("main"));
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
    
    if (location.hash) {
        let currentHash = location.hash.slice(1);
        let menuToOpen = null;
        let availableAnchors = [
            { "key": "speaker-article", "value": "mainSpeakersElement" },
            { "key": "sessions-article", "value": "mainSessionsElement" },
            { "key": "mainAboutElement", "value": "mainAboutElement" },
            { "key": "mainSessionsElement", "value": "mainSessionsElement" },
            { "key": "mainSpeakersElement", "value": "mainSpeakersElement" }
        ]

        for (let entry of availableAnchors) {
            if (currentHash.includes(entry.key)) {
                menuToOpen = entry.value;
                break;
            }
        }

        if (menuToOpen) {
            $("#mainHeader").css({ "opacity": 1 });
            openNavItem(menuToOpen);            
        } else {
            startLoading();
        }
    } else {
        startLoading();
    }

    $(".speaker--anchor").on("click", function () {
        openNavItem("mainSpeakersElement");
    });
  
    $(".session--anchor").on("click", function () {        
        openNavItem("mainSessionsElement");
    });

    $(".crow--the--singer").on("click", function () {
        $("#audioCrow")[0].play();
    });
}

/**
 * Helper that open nav item. This handle the highlight and what not.
 * 
 * @param {string} name - Nav item name
 */
function openNavItem(name) {
    $(".main--element").removeClass("active");
    $(".main--element[id='" + name +"']").addClass("active");
    $(".nav--item").removeClass("active");
    $(".nav--item[data-main='" + name + "']").addClass("active")
    document.title = "Crowing sessions - " + $(".nav--item[data-main='" + name + "']").attr("title");
}

/**
 * Display title and crow brand in a fancy way
 */
function startLoading() {
    $(".huge-title").animate({ "opacity": 1 }, 1000, function () {
        $("#landingBrandDiv").animate({ "opacity": 1 }, 1000, function () {
            $("#mainHeader").animate({ "opacity": 1 }, 1000);
        });
    });
}
