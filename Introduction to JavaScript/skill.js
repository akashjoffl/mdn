const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    // write your code just below here

    let result = input;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}