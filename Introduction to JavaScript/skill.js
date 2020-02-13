let myHistory = [];

if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);
}

if (myHistory.length >= 5) {
    myHistory.pop();

}