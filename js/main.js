function calculate(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let multi = num1 * num2;

    if (sum >= 0) {
        console.log(`Wynik dodawania wynosi ${sum}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    }

    if (difference >= 0) {
        console.log(`Wynik odejmowania wynosi ${difference}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    }

    if (multi >= 0) {
        console.log(`Wynik mnożenia wynosi ${multi}`);
    } else {
        console.log(`Wynik jest nieprawidłowy`);
    }
}
calculate(10, 7);