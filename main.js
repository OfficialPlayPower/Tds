var x = new Audio("MoltenDoom.mp3");
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_player_object = Img;

        block_player_object.scaleToWidth(150);
        block_player_object.scaleToHeight(140);
        block_player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_player_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);


    if (keyPressed == '87') {

        new_image("Commander.png");
        console.log("You have pressed <span>w</span> key");
    }

    if (keyPressed == '66') {
        console.log("You have pressed <span>b</span> key");
        new_image("Ranger.png");
    }
    if (keyPressed == '71') {
        console.log("You have pressed <span>g</span> key");
        new_image("Scout.png");
    }
    if (keyPressed == '76') {
        console.log("You have pressed <span>l</span> key");
        new_image("Accel.png");
    }
    if (keyPressed == '84') {
        console.log("You have pressed <span>t</span> key");
        new_image("Sniper.png");
    }
    if (keyPressed == '82') {
        console.log("You have pressed <span>r</span> key");
        new_image("Toxic.png");
    }
    if (keyPressed == '89') {
        console.log("You have pressed <span>y</span> key");
        new_image("Turret.png");
    }
    if (keyPressed == '68') {
        console.log("You have pressed <span>d</span> key");
        new_image("player.png");
    }
    if (keyPressed == '67') {
        console.log("You have pressed <span>c</span> key");
        new_image("CommanderCOA.png");
    }

    if (keyPressed == '38') {
        up();
        console.log("up")
    }
    if (keyPressed == '40') {
        down();
        console.log("left")
    }
    if (keyPressed == '37') {
        Left();
        console.log("left")
    }
    if (keyPressed == '39') {
        Right();
        console.log("right")
    }


    if (e.shiftKey == true && keyPressed == '80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

}

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
window.onload = function () {
    document.getElementById("my_audio").play();
}

function up() {
    if (player_y >= 0) {

        player_y = player_y - block_image_height;

        console.log("when up arrow is confirmed pressed yes =" + player_x + "-" + player_y);
        canvas.remove(player_object);

        player_update();

    }
}

function down() {
    if (player_y <= 500) {

        player_y = player_y + block_image_height;

        console.log("when down arow are has done is pressed, x =" + player_x + " | y = " + player_y);
        canvas.remove(player_object);

        player_update();

    }
}

function Left() {
    if (player_x >= 0) {

        player_x = player_x - block_image_width;

        console.log("when left arrow is confirmed pressed yes =" + player_x + "-" + player_y);
        canvas.remove(player_object);

        player_update();

    }
}

function Right() {
    if (player_x <= 850) {

        player_x = player_x + block_image_width;

        console.log("when rite arow are has done is pressed, x =" + player_x + " | y = " + player_y);
        canvas.remove(player_object);

        player_update();

    }
}