var RobotMaker = function(robot, run_speed, jump_height) {

    var stage = document.getElementById('stage');
    var run_timer, jump_timer;
    var face_right = true;

    function run_r(phase, left) {
        face_right = true;
        if ((left + (15 * run_speed)) < (stage.offsetWidth - robot.offsetWidth)) {

            left = left + (15 * run_speed);
            robot.style.left = left + "px";
            switch (phase) {
                case 1:
                    robot.style.backgroundPosition = "-120px 0px";
                    run_timer = setTimeout(function() {
                        run_r(2, left);
                    }, 175);
                    break;
                case 2:
                    robot.style.backgroundPosition = "-240px 0px";
                    run_timer = setTimeout(function() {
                        run_r(3, left);
                    }, 175);
                    break;
                case 3:
                    robot.style.backgroundPosition = "-360px 0px";
                    run_timer = setTimeout(function() {
                        run_r(4, left);
                    }, 175);
                    break;
                case 4:
                    robot.style.backgroundPosition = "-480px 0px";
                    run_timer = setTimeout(function() {
                        run_r(5, left);
                    }, 175);
                    break;
                case 5:
                    robot.style.backgroundPosition = "-600px 0px";
                    run_timer = setTimeout(function() {
                        run_r(6, left);
                    }, 175);
                    break;
                case 6:
                    robot.style.backgroundPosition = "-720px 0px";
                    run_timer = setTimeout(function() {
                        run_r(1, left);
                    }, 175);
                    break;

			}
					} else {
            robot.style.backgroundPosition = "0px 0px";
        }
    }

    function run_l(phase, left) {
        face_right = false;
        if (0 < robot.offsetLeft - (15 * run_speed)) {

            left = left - (15 * run_speed);
            robot.style.left = left + "px";
            switch (phase) {
                case 1:
                    robot.style.backgroundPosition = "-120px -150px";
                    run_timer = setTimeout(function() {
                        run_l(2, left);
                    }, 175);
                    break;
                case 2:
                    robot.style.backgroundPosition = "-240px -150px";
                    run_timer = setTimeout(function() {
                        run_l(3, left);
                    }, 175);
                    break;
                case 3:
                    robot.style.backgroundPosition = "-360px -150px";
                    run_timer = setTimeout(function() {
                        run_l(4, left);
                    }, 175);
                    break;
                case 4:
                    robot.style.backgroundPosition = "-480px -150px";
                    run_timer = setTimeout(function() {
                        run_l(5, left);
                    }, 175);
                    break;
                case 5:
                    robot.style.backgroundPosition = "-600px -150px";
                    run_timer = setTimeout(function() {
                        run_l(6, left);
                    }, 175);
                    break;
                case 6:
                    robot.style.backgroundPosition = "-720px -150px";
                    run_timer = setTimeout(function() {
                        run_l(1, left);
                    }, 175);
                    break;
            }
        } else {
            robot.style.backgroundPosition = "0px -150px";
        }
    }

    function jmp(up, top) {
        if (face_right) {
            robot.style.backgroundPosition = "-840px 0px";
        } else {
            robot.style.backgroundPosition = "-840px -150px";
        }

        if (up && (robot.offsetTop > (20 * (15 / jump_height)))) {
            top = top - (top * .1);
            robot.style.top = top + "px";
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 120);
        } else if (up) {
            up = false;
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 120);
        } else if (!up && (robot.offsetTop < 345)) {
            top = top + (top * .1);
            robot.style.top = top + "px";
            jump_timer = setTimeout(function() {
                jmp(up, top);
            }, 120);
        } else {
            robot.style.top = "60vh";
            if (face_right) {
                robot.style.backgroundPosition = "0px 0px";
            } else {
                robot.style.backgroundPosition = "0px -150px";
            }

            jump_timer = false;
        }

    }

    return {

        run_right: function() {
            if (!jump_timer || jump_timer == undefined) {
                clearTimeout(run_timer); // We clear whatever running is going on now ...
                run_r(1, robot.offsetLeft); // And we start them running to the right.
            }
        },

        run_left: function() {
            if (!jump_timer || jump_timer == undefined) {
                clearTimeout(run_timer); // We clear whatever running is going on now ...
                run_l(1, robot.offsetLeft); // and we start them running to the left.
            }
        },

        stop_running: function() {
            if (!jump_timer || jump_timer == undefined) {
                clearTimeout(run_timer);
                if (face_right) {
                    robot.style.backgroundPosition = "0px 0px";
                } else {
                    robot.style.backgroundPosition = "0px -150px";
                }

            }
        },

        jump: function() {
            if (!jump_timer || jump_timer == undefined) {
                clearTimeout(run_timer);
                jmp(true, robot.offsetTop);
            }
        }
    };
}

var j = RobotMaker(document.getElementById('j'), 1, 1);