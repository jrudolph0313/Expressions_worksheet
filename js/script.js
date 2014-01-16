//Julian Rudolph //

//Dog Years//

// Given: Sparky's age: 13 human years//
var age=13
// Sparky's "Human years" age times 7//
age = age*7
// Print age of Sparky in "Dog Years"
console.log("Sparky is 13 human years old which is" +" "+ (age) +" "+ "in dog years")



// Slice of Pie part 1 //

// Givens //
var slices=6
var people=13
var pizzasOrdered=9
// pizzasOrdered times slices divided by people//
var slicesPer=(pizzasOrdered * slices)/people
console.log %(slicesPer)
console.log("Each person ate"+" "+(slicesPer)+" "+"slices of pizza at the party.")

//Slice of Pie part 2//

var sparkyAte= (slicesPer) % (people)

//yeah, im totally lost here...


//Average shopping bill//
var totals= Array(75, 25, 33, 17, 22);
//adding the totals in the array and assigning to a var//
var addedTotals=(totals[0]+totals[1]+totals[2]+totals[3]+totals[4]);
//Take addedTotals divide by 5, assign answer to var//
var average=addedTotals/5
//print average to console//
console.log("You havespent a total of $"+(average)+" "+"on groceries over 5 weeks.")


//Discounts
//Assign vars
var price= 135.33;
var disper= 43;
var percentDis= disper/100;
var description= "1 bottle Premium Absynth";
var tax= .06;
//Finding the price after discount with tax added
var priceDisTax= (price * percentDis * tax) + (price * percentDis);
//print answer
console.log("Your"+" "+(description)+" "+ "was originally $"+(price)+", but after a"+" "+(disper)+"% discount, it is now $"+(price*percentDis)+" "+"without tax, and $"+(priceDisTax)+" " +"with tax.");






















