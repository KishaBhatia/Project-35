class Voter{
    constructor(){}
    
    getVoterCount(){
        var voterCountRef=database.ref("voterCount");
        voterCountRef.on("value",function(data){
            voterCount=data.val();
        })
    }

    updateVoterCount(count){
        database.ref("/").update({
            voterCount:count
        })
    }

    updateVoterDetails(name,email){
        var voterIndex="voter"+voterCount;
            database.ref("voters/"+voterIndex).update({
                name:name,
                email:email
            });
    }

    updateVote(Ans){
        var voterIndex="voter"+voterCount;
       
        database.ref("voters/"+voterIndex).update({
            Vote:Ans
        })
    }
    
};

