const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');


  

function checkPalindrome(input) {
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  //const rev = [...lowerCaseStr].reverse().join('');  
  
  if (input === '') {
        alert('Please input a value');
        return;
      } 
    
    let resultMsg = `${input} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome` 

    result.replaceChildren();
    
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerText = resultMsg;
    result.appendChild(pTag);
};



checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});

textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter')
 {
  checkPalindrome(textInput.value);
  textInput.value = '';
 }});