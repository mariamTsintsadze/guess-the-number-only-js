//ფუნქცია რიცხვის ჩასაფიქრებლად
function RandomNumber(min, max){
    return Math.floor(Math.random()*(+max - +min + 1) + +min);
}
function playGame(minNumber, maxNumber){
    //ჩაიფიქრა რიცხვი
    let randomNumber = RandomNumber(minNumber, maxNumber);
    let attempts = []; 
    let guess = '';
    //შესრულდეს ციკლი მანამ სანამ სწორ რიცხვს არ გამოიცნობს
    do {
        guess = prompt('Guess the number');
        attempts.push(guess); //მცდელობებს ინახავს მასივში

        //მინიშნებები
        if(isNaN(parseInt(guess))) {
            alert('Invalid Input');
        }else if(+guess < randomNumber) {
            alert('Enter larger number');
        }else if(+guess > randomNumber) {
            alert('Enter smaller number');
        }else {
            console.log(`Congrats, you guessed the number ${randomNumber} correctly in ${attempts.length} attempts. your attemps were: ${attempts}`);
        }
    }while (+guess !== randomNumber);

}
while(true){
    //ქვედა ზღვარის შეყვანა
    let minNumber = prompt('Enter a min number');
    //სანამ რიცხვს არ შეიყვანს მანამდე მოსთხოვს შეყვანას
    while(isNaN(parseInt(minNumber))){
        alert('Invalid input for min number');
        minNumber = prompt('Enter a valid data');
    }
    //ზედა ზღვარის შეყვანა
    let maxNumber = prompt('Enter a max number');
    //სანამ რიცხვს არ შეიყვანს ან ქვედა ზღვარზე მცირე იქნება ზედა ზღვარო მანამდე მოსთხოვს შეყვანას
    while(isNaN(parseInt(maxNumber)) || +minNumber >= +maxNumber){
        alert('Invalid input for max number');
        maxNumber = prompt('Enter a valid data');
    }
    //გამოიძახოს ფუნქცია
    playGame(minNumber, maxNumber);

    let end =confirm("Do you want to continue the game?") 
    if(!end){
        break;
    }


}