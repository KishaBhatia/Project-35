class Form2{
    constructor(){} 

    display(){

        //heading
        var title=createElement("h1");
        title.html("SURVEY");
        title.position(505,0);

        var button1=createButton("SUBMIT");

        //questions
        var ques1=createElement("h3");
        var ques2=createElement("h3");
        var ques3=createElement("h3");
        var ques4=createElement("h3");
        var ques5=createElement("h3");
        var ques6=createElement("h3");
        var ques7=createElement("h3");

        //questions heading
        var greeting=createElement("h2");
        //thanks for filling
        var greeting1=createElement("h1");
        
        ques1.html("Q.1 Do you think we need to have free lunch meals in our school canteen for the kids who are very poor.")
        ques1.position(150,100);
        //ques1.hide();

       
        ques2.html("Q.2 Would you be willing to contribute a small amount every month for such a program?");
        ques2.position(150,190);
        //ques2.hide();

        
        ques3.html("Q.3 How much per month would you be willing to pay? (in Rupees)");
        ques3.position(150,270);
        //ques3.hide();

        
        ques4.html("Q.4 In which school will you be willing to donate money?");
        ques4.position(150,340);
        //ques4.hide();

        
        ques5.html("Q.5 According to you children of which grade should be given free meal? ");
        ques5.position(150,410);
        //ques5.hide();

        
        ques6.html("Q.6 Do you think it will increase the enrollment of children in school?");
        ques6.position(150,480);
        //ques6.hide();

        
        ques7.html("Q.7 Any other suggestions");
        ques7.position(150,550);
        //ques7.hide();

        var ans1=createRadio("h2");
        ans1.option("Yes");
        ans1.option("No");
        ans1.position(200,150);
      
        var ans2=createRadio("h2");
        ans2.option("Yes");
        ans2.option("No");
        ans2.position(200,250);

        var ans3=createRadio("h2");
        ans3.option("100");
        ans3.option("500");
        ans3.option("1000");
        ans3.option("More");
        ans3.position(200,330);

        var ans4=createRadio("h2");
        ans4.option("Government");
        ans4.option("Private");
        ans4.option("Both");
        ans4.position(200,400);

        var ans5=createRadio("h2");
        ans5.option("I-III");
        ans5.option("I-V");
        ans5.option("All Grades");
        ans5.position(200,470);

        
        var ans6=createRadio("h2");
        ans6.option("Yes");
        ans6.option("No");
        ans6.position(200,540);

        var ans7=createInput("Your Answer");
        ans7.position(180,620);
        ans7.size(400,100);

        //submit button
        button1.position(930,700);
        button1.size(100,50);
        //button1.hide();

        greeting.html("(Questionnaire) "+name);
        greeting.position(650,10);

        greeting1.html("Thanks for fillng!");
        greeting1.position(450,300);
        greeting1.hide();
    

        button1.mousePressed(function(){
            greeting1.show();
            button1.hide();
            greeting.hide();
            ques1.hide();
            ques2.hide();
            ques3.hide();
            ques4.hide();
            ques5.hide();
            ques6.hide();
            ques7.hide();
            ans1.hide();
            ans2.hide();
            ans3.hide();
            ans4.hide();
            ans5.hide();
            ans6.hide();
            ans7.hide();

            
            pushAnswers(ans1.value(),ans2.value(),ans3.value(),ans4.value(),ans5.value(),ans6.value(),ans7.value());
        

        })
    }
}

function pushAnswers(ans1,ans2,ans3,ans4,ans5,ans6,ans7){
    var Ans=[ans1,ans2,ans3,ans4,ans5,ans6,ans7];
    voter.updateVote(Ans);

}