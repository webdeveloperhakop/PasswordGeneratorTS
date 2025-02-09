// Настройка длины пароля
const passwordLengthRange = document.querySelector('.password-length-range');
const passwordLengthValue = document.querySelector('.password-length-value');
if (passwordLengthRange && passwordLengthValue) {
    passwordLengthRange.addEventListener('input', () => {
        passwordLengthValue.textContent = passwordLengthRange.value;
    });
}
// Создание пароля
const passwordResult = document.querySelector('.result-password');
const createBtn = document.querySelector('.create-btn');
const lettersCheckbox = document.querySelector('.letters-checkbox');
const numsCheckbox = document.querySelector('.nums-checkbox');
const specSymbolsCheckbox = document.querySelector('.spec-symbols-checkbox');
// Массивы с нужными символами
const allSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '?', ':', ',', '.', '/', '>', '<'];
const lettersNums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lettersSpecSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '?', ':', ',', '.', '/', '>', '<'];
const numsSpecSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '?', ':', ',', '.', '/', '>', '<'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specSymbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '?', ':', ',', '.', '/', '>', '<'];
if (passwordResult && createBtn && passwordLengthRange && lettersCheckbox && numsCheckbox && specSymbolsCheckbox) {
    createBtn.addEventListener('click', () => {
        const passwordLengthValue = Number(passwordLengthRange.value);
        let result = '';
        for (let i = 0; i < passwordLengthValue; i++) {
            if (lettersCheckbox.checked && numsCheckbox.checked && specSymbolsCheckbox.checked || !lettersCheckbox.checked && !numsCheckbox.checked && !specSymbolsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * allSymbols.length);
                result += `${allSymbols[randomSymbol]}`;
            }
            else if (lettersCheckbox.checked && numsCheckbox.checked && !specSymbolsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * lettersNums.length);
                result += `${lettersNums[randomSymbol]}`;
            }
            else if (lettersCheckbox.checked && !numsCheckbox.checked && specSymbolsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * lettersSpecSymbols.length);
                result += `${lettersSpecSymbols[randomSymbol]}`;
            }
            else if (!lettersCheckbox.checked && numsCheckbox.checked && specSymbolsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * numsSpecSymbols.length);
                result += `${numsSpecSymbols[randomSymbol]}`;
            }
            else if (lettersCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * letters.length);
                result += `${letters[randomSymbol]}`;
            }
            else if (numsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * nums.length);
                result += `${nums[randomSymbol]}`;
            }
            else if (specSymbolsCheckbox.checked) {
                const randomSymbol = Math.floor(Math.random() * specSymbols.length);
                result += `${specSymbols[randomSymbol]}`;
            }
            else {
                console.error('Ошибка');
            }
        }
        passwordResult.textContent = result;
    });
}
// Копирование пароля
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn && passwordResult) {
    copyBtn.addEventListener('click', () => {
        if (passwordResult.textContent === 'Результат будет здесь') {
            return false;
        }
        else {
            window.navigator.clipboard;
            window.navigator.clipboard.writeText(passwordResult.textContent);
        }
    });
}
//# sourceMappingURL=app.js.map