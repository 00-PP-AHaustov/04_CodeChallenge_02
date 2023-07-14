/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let person, age, drink, text;

person = prompt("Bitte Namen eingeben: ");
age = prompt("Bitte Alter eingeben: ");

if (age => 0 && age < 6) {
    drink = "Milch";
} else if (age < 13) {
    drink = "Saft";
} else if (age < 18) {
    drink = "Cola";
} else if (age => 18) {
    drink = "Wein";
} else drink = "Tee";

text = `${person} gönnt sich heute ${drink}`;

console.log(text);
