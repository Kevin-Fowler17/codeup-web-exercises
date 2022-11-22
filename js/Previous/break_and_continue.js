for (let number = 0; number < 1 || number > 50;) {

    number = parseFloat(prompt("Enter a number between 1 and 50."));

    if (number >= 1 && number <= 50) {
        console.log("Number to skip is: " + number);
        if (number >= 1 && number <= 50) {
            for (let i = 1; i < 50; i++) {
                if (i % 2 === 0) {
                    continue;
                } else if (i === number) {
                    console.log("Yikes! Skipping number:" + i);
                } else {
                    console.log("Here is an odd number:" + i);
                }
            }
            break;
        }
    }
}