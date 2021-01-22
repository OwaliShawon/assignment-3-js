// https://github.com/OwaliShawon/assignment-3-js.git

// ---------------------------------------------------------------------------
// ১. kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Negative value is not acceptable"
    }else{
        var meter = kilometer * 1000;
        return meter;
    }
}

//  var result  = kilometerToMeter(1.8);
//  console.log(result);

// --------------------------------------------------------------------------

// ২. budgetCalculator
function budgetCalculator(totalWatches, totalMobile, totalLaptop){
    if(totalWatches < 0 || totalMobile < 0 || totalLaptop < 0){
        return "Oh! Rokeya Quantity cannot be negative"
    }else{
        var watchesPrice = totalWatches * 50;
        var mobilePrice = totalMobile * 100;
        var laptopPrice = totalLaptop * 500;
    
        var totalBudget = watchesPrice + mobilePrice + laptopPrice;
    
        return totalBudget;
    }
}

// var budgetMoney = budgetCalculator(2, 2, 2);
// console.log(budgetMoney);

// ------------------------------------------------------------------------------

// ৩. hotelCost
function hotelCost(bookingDays){
    if(bookingDays < 0){
        return "sothik din entry dere rokeya!"
    }else{
        if(bookingDays <= 10){
            totalFair = bookingDays * 100;
    
        }
        else if(bookingDays > 10 && bookingDays <= 20){
            var firstTenDays = 10 * 100;
            var afterTenDays = (bookingDays - 10) * 80;
            totalFair = firstTenDays +afterTenDays;
        }else{
            var firstTenDays = 10 * 100;
            var afterTenDays = 10 * 80;
            var afterTwentyDays = (bookingDays - 20) * 50;
            totalFair = firstTenDays + afterTenDays + afterTwentyDays;
        }
    }
    return totalFair;
}

// var total = hotelCost(21);
// console.log(total);

// -------------------------------------------------------------------------------------

// ৪. megaFriend
function megaFriend(friendsName){
    if(friendsName.length == 0){
     return "Empty string"
    }
    else{
     var length = 0;
     var longName = "";
     for(var i = 0; i < friendsName.length; i++){
         if(friendsName[i].length > length){
             length = friendsName[i].length;
             longName = friendsName[i];
         }
     }
     return longName;
 }
 }
 
 var friendsName = ["Shamsu", "Shawon", "Ridwan", "Hasibullah", "Rafi", "Antor", "Utsho"];
//  var longest = megaFriend(friendsName);
//  console.log(longest);
 
