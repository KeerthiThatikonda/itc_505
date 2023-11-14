document.addEventListener('DOMContentLoaded', function () {
    const sortButton = document.getElementById('sortButton');
    const numbersInput = document.getElementById('numbers');
    const sortedList = document.getElementById('sortedList');

    sortButton.addEventListener('click', function () {
        const inputNumbers = numbersInput.value.split(',').map(num => parseInt(num.trim()));
        const sortedNumbers = bubbleSort(inputNumbers);
        displaySortedNumbers(sortedNumbers);
    });

    function bubbleSort(arr) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return arr;
    }

    function displaySortedNumbers(numbers) {
        sortedList.innerHTML = ''; // Clear the previous results
        numbers.forEach(number => {
            const listItem = document.createElement('li');
            listItem.textContent = number;
            sortedList.appendChild(listItem);
        });
    }
});
