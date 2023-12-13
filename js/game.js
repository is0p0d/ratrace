const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

//var randomColor = Math.floor(Math.random()*16777215);

var renderwin = document.getElementById("renderwindow").getContext('2d');
var maxRow = SCREEN_WIDTH;
var maxCol = SCREEN_HEIGHT;
var arrLen = maxRow * maxCol;
var pixels = new Uint32Array(arrLen);


//populate array with random junk for testing
function update()
{
    //var randnum = Math.floor(Math.random()*16777215);
    for (var x = 0; x < arrLen; x++)
    {
        pixels[x] = Math.floor(Math.random()*16777215);
    }
}

//write that to the screen

function draw()
{
    for (var y = )
}

// function draw()
// {
//     for (var screen_y = 0; screen_y < (SCREEN_WIDTH*SCREEN_HEIGHT); screen_y += SCREEN_WIDTH)
//     {
//         for (var screen_x = screen_y; screen_x < (screen_y + SCREEN_WIDTH); screen_x++)
//         {
//             var color = "#" + pixels[screen_x].toString(16);

//             var adjusted_x = (screen_x-screen_y);
//             var adjusted_y = (Math.floor(screen_y/SCREEN_WIDTH));
//             //console.log("color: ", color);
//             //console.log("screen_y:", screen_y, " screen_x:", screen_x, " adjusted_y:", adjusted_y, " adjusted_x:", adjusted_x);
//             renderwin.fillStyle = color;
//             renderwin.fillRect(adjusted_x, adjusted_y,1,1);
//         }
//     }
// }

function loop()
{
    update();
    draw();
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
