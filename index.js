$(".action-btn").on('click', function () {
    let menu = $(".dropdown-menu"),
        btn = $(this),
        icon = $(".action-btn i");

    if (menu.hasClass("hidden")) {
        icon.removeClass("fa-chevron-down");
        icon.addClass("fa-chevron-up");
        btn.addClass("border");
        menu.removeClass("hidden");
    } else {
        icon.removeClass("fa-chevron-up");
        icon.addClass("fa-chevron-down");
        btn.removeClass("border");
        menu.addClass("hidden");
    }
});

let tl = ".top-left",
    tm = ".top-mid",
    tr = ".top-right",
    ml = ".mid-left",
    mm = ".mid-mid",
    mr = ".mid-right",
    bl = ".bot-left",
    bm = ".bot-mid",
    br = ".bot-right";

let turnCounter = 1;

$(tl).on('click', function () {
    if (!($(tl + " i").hasClass("fa-o")) && !($(tl + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(tl + " i").addClass("fa-o")
            $(tl + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")
        } else {
            $(tl + " i").addClass("fa-x")
            $(tl + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(tm).on('click', function () {
    if (!($(tm + " i").hasClass("fa-o")) && !($(tm + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(tm + " i").addClass("fa-o")
            $(tm + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(tm + " i").addClass("fa-x")
            $(tm + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(tr).on('click', function () {
    if (!($(tr + " i").hasClass("fa-o")) && !($(tr + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(tr + " i").addClass("fa-o")
            $(tr + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(tr + " i").addClass("fa-x")
            $(tr + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(ml).on('click', function () {
    if (!($(ml + " i").hasClass("fa-o")) && !($(ml + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(ml + " i").addClass("fa-o")
            $(ml + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(ml + " i").addClass("fa-x")
            $(ml + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(mm).on('click', function () {
    if (!($(mm + " i").hasClass("fa-o")) && !($(mm + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(mm + " i").addClass("fa-o")
            $(mm + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(mm + " i").addClass("fa-x")
            $(mm + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(mr).on('click', function () {
    if (!($(mr + " i").hasClass("fa-o")) && !($(mr + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(mr + " i").addClass("fa-o")
            $(mr + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(mr + " i").addClass("fa-x")
            $(mr + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(bl).on('click', function () {
    if (!($(bl + " i").hasClass("fa-o")) && !($(bl + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(bl + " i").addClass("fa-o")
            $(bl + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(bl + " i").addClass("fa-x")
            $(bl + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(bm).on('click', function () {
    if (!($(bm + " i").hasClass("fa-o")) && !($(bm + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(bm + " i").addClass("fa-o")
            $(bm + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(bm + " i").addClass("fa-x")
            $(bm + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(br).on('click', function () {
    if (!($(br + " i").hasClass("fa-o")) && !($(br + " i").hasClass("fa-x"))) {
        if (turnCounter % 2 == 0) {
            $(br + " i").addClass("fa-o")
            $(br + " i").addClass("yellow")
            $(".turn p").html("Player 1, you're up!")
            $(".turn p").removeClass("yellow")
            $(".turn p").addClass("turquoise")
            $(".turn i").removeClass("fa-o")
            $(".turn i").addClass("fa-x")
            $(".turn i").removeClass("yellow")
            $(".turn i").addClass("turquoise")

        } else {
            $(br + " i").addClass("fa-x")
            $(br + " i").addClass("turquoise")
            $(".turn p").html("Player 2, you're up!")
            $(".turn p").removeClass("turquoise")
            $(".turn p").addClass("yellow")
            $(".turn i").removeClass("fa-x")
            $(".turn i").addClass("fa-o")
            $(".turn i").removeClass("turquoise")
            $(".turn i").addClass("yellow")
        }
        turnCounter++
    }
});

$(".square").on('click', function () {


});