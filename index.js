let userText = prompt('Введите текст');
let wordFromText = prompt('Введите слово из текста');
userText = userText.trim();
let indexOfWord = userText.indexOf(wordFromText);
let string = userText.slice(indexOfWord);
alert(`Результат: ${string}`);
