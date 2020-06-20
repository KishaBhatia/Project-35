class Form1{
    constructor(){}

    display(){
        //heading
        var title=createElement("h1");
        title.html("SURVEY");
        title.position(505,0);

        var INPUT1=createInput("Your Answer");
        INPUT1.position(270,120);
        INPUT1.size(400,30);

        var INPUT2=createInput("Your Answer");
        INPUT2.position(250,200);
        INPUT2.size(400,30);

        var INPUT3=createInput("Your Answer");
        INPUT3.position(300,280);
        INPUT3.size(400,30);

        var INPUT4=createInput("Your Answer");
        INPUT4.position(320,360);
        INPUT4.size(400,30);

        var INPUT5=createInput("Your Answer");
        INPUT5.position(410,445);
        INPUT5.size(400,30);

        var INPUT6=createInput("Your Answer");
        INPUT6.position(360,530);
        INPUT6.size(400,30);

        var INPUT7=createInput("Your Answer");
        INPUT7.position(250,610);
        INPUT7.size(400,30);

        //next button
        var button=createButton("NEXT");
        button.position(930,700);
        button.size(100,50);


        //introduction
        var intro1=createElement("h1") ;
        intro1.html("Name:");
        intro1.position(170,100);

        var intro2=createElement("h1") ;
        intro2.html("Age:");
        intro2.position(170,180);

        var intro3=createElement("h1") ;
        intro3.html("Gender:");
        intro3.position(170,260);

        var intro4=createElement("h1") ;
        intro4.html("Email-id:");
        intro4.position(170,340);

        var intro5=createElement("h1") ;
        intro5.html("Phone Number:");
        intro5.position(170,430);

        var intro6=createElement("h1") ;
        intro6.html("Occupation:");
        intro6.position(170,510);

        var intro7=createElement("h1") ;
        intro7.html("City:");
        intro7.position(170,590);

        button.mousePressed(function(){

            //var name=input.value();
            
            intro1.hide();
            intro2.hide();
            intro3.hide();
            intro4.hide();
            intro5.hide();
            intro6.hide();
            intro7.hide();

            INPUT1.hide();
            INPUT2.hide();
            INPUT3.hide();
            INPUT4.hide();
            INPUT5.hide();
            INPUT6.hide();
            INPUT7.hide();

            button.hide();

            game.update(1);
            game.displaySurvey();

            if(voterCount){
                voter.updateVoterCount(voterCount+1);
                voter.updateVoterDetails(name,email);
                
            }

        })
    }
}