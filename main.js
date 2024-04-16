nose_x=0;
nose_y=0;
function preload()
    {

    }

function setup()
    {
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
        poseNet=ml5.poseNet(video, modeLoaded);
        poseNet.on("pose", gotPoses);
    }

    function gotPoses(results)
    {
        if(results.length>0)
        {
            console.log(results);
            nose_x=results[0].pose.nose.x;
            nose_y=results[0].pose.nose.y;   
        }
    }

    function draw()
    {
        image(video, 0, 0, 300, 300);
    }

    function modeLoaded()
    {
        console.log("poseNet esta inicializado");
    }


    function take_snapshot()
    {
        save("foto_mi_flitro.png");
    }