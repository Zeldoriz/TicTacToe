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

let grid = [tl, tm, tr, ml, mm, mr, bl, bm, br]

let turnCounter = 1,
    player1Wins = 0,
    player2Wins = 0,
    ties = 0;

function p1Turn() {
    $(".turn p").html("Player 1, you're up!")
    $(".turn p").removeClass("yellow")
    $(".turn p").addClass("turquoise")

    $(".turn i").removeClass("fa-o")
    $(".turn i").addClass("fa-x")
    $(".turn i").removeClass("yellow")
    $(".turn i").addClass("turquoise")
}

function p2Turn() {
    $(".turn p").html("Player 2, you're up!")
    $(".turn p").removeClass("turquoise")
    $(".turn p").addClass("yellow")

    $(".turn i").removeClass("fa-x")
    $(".turn i").addClass("fa-o")
    $(".turn i").removeClass("turquoise")
    $(".turn i").addClass("yellow")
}

function resetGame() {
    grid.forEach(grid => {
        $(grid + " i").removeClass("fa-o")
        $(grid + " i").removeClass("fa-x")
        $(grid + " i").removeClass("yellow")
        $(grid + " i").removeClass("turquoise")

        p1Turn()
    });
    turnCounter = 0
}

function winCond(player) {
    if (player == 1) {
        console.log("Player 1 Wins")
        player1Wins++
    } else if (player == 2) {
        console.log("Player 2 Wins")
        player2Wins++
    } else {
        console.log("Tie")
        ties++
    }
    resetGame()
}

(grid).forEach(grid => {
    $(grid).on('click', function () {
        if (!($(grid + " i").hasClass("fa-o")) && !($(grid + " i").hasClass("fa-x"))) {
            if (turnCounter % 2 == 0) {
                $(grid + " i").addClass("fa-o")
                $(grid + " i").addClass("yellow")
                p1Turn()
            } else {
                $(grid + " i").addClass("fa-x")
                $(grid + " i").addClass("turquoise")
                p2Turn()
            }

            if (!($(".turn p").hasClass("animate-turn-para"))) {
                $(".turn i").toggleClass("animate-turn-icon")
                $(".turn p").toggleClass("animate-turn-para")
            } else {

                setTimeout(function () {
                    $(".turn i").toggleClass("animate-turn-icon")
                    $(".turn p").toggleClass("animate-turn-para")
                }, 0);
                $(".turn i").toggleClass("animate-turn-icon")
                $(".turn p").toggleClass("animate-turn-para")
            }

            // Horizontal Possibilities
            if ($(tl + " i").hasClass("fa-x") && $(tm + " i").hasClass("fa-x") && $(tr + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tl + " i").hasClass("fa-o") && $(tm + " i").hasClass("fa-o") && $(tr + " i").hasClass("fa-o")) {
                winCond(2)
            } else if ($(ml + " i").hasClass("fa-x") && $(mm + " i").hasClass("fa-x") && $(mr + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(ml + " i").hasClass("fa-o") && $(mm + " i").hasClass("fa-o") && $(mr + " i").hasClass("fa-o")) {
                winCond(2)
            } else if ($(bl + " i").hasClass("fa-x") && $(bm + " i").hasClass("fa-x") && $(br + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(bl + " i").hasClass("fa-o") && $(bm + " i").hasClass("fa-o") && $(br + " i").hasClass("fa-o")) {
                winCond(2)
            }
            // Vertical Possibilities
            else if ($(tl + " i").hasClass("fa-x") && $(ml + " i").hasClass("fa-x") && $(bl + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tl + " i").hasClass("fa-o") && $(ml + " i").hasClass("fa-o") && $(bl + " i").hasClass("fa-o")) {
                winCond(2)
            } else if ($(tm + " i").hasClass("fa-x") && $(mm + " i").hasClass("fa-x") && $(bm + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tm + " i").hasClass("fa-o") && $(mm + " i").hasClass("fa-o") && $(bm + " i").hasClass("fa-o")) {
                winCond(2)
            } else if ($(tr + " i").hasClass("fa-x") && $(mr + " i").hasClass("fa-x") && $(br + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tr + " i").hasClass("fa-o") && $(mr + " i").hasClass("fa-o") && $(br + " i").hasClass("fa-o")) {
                winCond(2)
            }
            // Diagonal Possibilities
            else if ($(tl + " i").hasClass("fa-x") && $(mm + " i").hasClass("fa-x") && $(br + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tl + " i").hasClass("fa-o") && $(mm + " i").hasClass("fa-o") && $(br + " i").hasClass("fa-o")) {
                winCond(2)
            } else if ($(tr + " i").hasClass("fa-x") && $(mm + " i").hasClass("fa-x") && $(bl + " i").hasClass("fa-x")) {
                winCond(1)
            } else if ($(tr + " i").hasClass("fa-o") && $(mm + " i").hasClass("fa-o") && $(bl + " i").hasClass("fa-o")) {
                winCond(2)
            } else if (turnCounter == 9) {
                winCond(3)
            }

            $(".player1 p").html(player1Wins + " Wins")
            $(".player2 p").html(player2Wins + " Wins")
            $(".ties p").html(ties + " Ties")
            turnCounter++
        }
    })
});