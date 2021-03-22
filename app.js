// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');

// console.log(input1, input2, input3, input4, input5, input6);

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    output1.textContent = input1.value;
    output2.textContent = input2.value;
    output3.textContent = input3.value;
    output4.textContent = input4.value;
    output5.textContent = input5.value;
    output6.textContent = input6.value;
    const showStory = document.getElementById('show-story');
    showStory.classList.remove('hidden');

    


});

