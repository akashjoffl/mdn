const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (let i = 0; i < stations.length; i++) {
    let input = stations[i];
    let code = input.slice(0, 3); // Extract the three-letter station code and store it in a new variable.

    let semiC = input.indexOf(';'); // Find the character index number of the semicolon

    let name = input.slice(semiC + 1);
    /* Extract the human-readable station name using the semicolon character index number 
       as a reference point, and store it in a new variable. */

    let result = code + ': ' + name; // Concatenate the two new variables and a string literal to make the final string.

    let listItem = document.createElement('li');
    listItem.textContent = result; // Change the value of the result variable to equal to the final string, not the input. 

    list.appendChild(listItem);
}