function kilometerToMeter(kilometer) {
    if(kilometer<0) {
        return "distance can not be negative!";
    }
    else{
        var meter=kilometer*1000;
        return meter; 
    } 
}
console.log(kilometerToMeter(3.021)); //output: 3021

// // 2nd Project 

function budgetCalculator(watchQity,mobileQity,laptopQity) {
   if(watchQity <0 || mobileQity <0 || laptopQity <0 ){       //if any of any the item's qity assigned neg(-), it wil warn! 
       return 'Quantity can not be negative!'
   }
   else{
    budget = watchQity*50 + mobileQity*100 + laptopQity*500;
    return budget;
   }
}
console.log( budgetCalculator(3,2,1) );                   // Quantity of watch,mobile and laptop sequentially 


// // 3rd problem solving 

function hotelCost(Days) {
    var cost;
    if(Days<0) {
        return 'Negative value is not acceptable !!'
    }
    else {
        if(Days <= 10){                            //for first 10 days
            cost = Days*100;
        }
        else if(Days > 10 && Days <= 20) {         //for first 20 days
            cost = 100*10 + (Days-10)*80;          //or, 1000+(Days-10)*80;
        }
        else{                                      //for more than 20 days
            cost = 100*10 + 80*10 + (Days-20)*50;  //or,1800+(Days-20)*50;
        }
        return cost;
    }
}
console.log( hotelCost(20) );

// //4th problem solving


function megaFriend(namesArray) {
    var max=0;
    for(i=0;i<namesArray.length;i++) {
        var tem= namesArray[i].length;          // sequentially element's length
         if(tem>max){                           //comparing element's length
            max=tem;                            //if length is larger, assign to max
            var largeName=namesArray[i];        // largeName=the larger element of that[i] array
        }
    }
    return largeName;                           //return the largest string from the array(namesArray) 
}
var friendList=['Saju','Roich','Shohag','Imran','Ashraful','Adib','Mohaiminul'];
console.log(megaFriend(friendList));            //will print the larger string(name) from friendList
