
/**
 * This function is to create the progress bar
 */
function create(){
    var beforemsg = document.getElementById("error_div");
    beforemsg.style.display="none";
    var pGoal=document.getElementById("goal").value;
    var pQuantity=document.getElementById("quantity").value;
    if(validate(pQuantity,pGoal)){
        let forumla= (parseFloat(pQuantity)*100)/parseFloat(pGoal);   
        document.getElementById("id_progres").style.width = forumla+"%";  
       
    }
    else{
        var msg = document.getElementById("error_div");
        msg.style.display="block";
        document.getElementById("error_msg").innerHTML="Both or one of the values are not positive and a valid number";
    }
}
//This function validates that a number is correct and above zero
function validate(quantity,goal){
    if((parseFloat(quantity)>0 && parseFloat(goal)>0) && (parseFloat(goal)>parseFloat(quantity))) {
        return true;
    }else{
        return false;
    }
}
