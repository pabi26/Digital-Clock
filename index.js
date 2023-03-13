function updateDate() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1; // add 1 to get the correct month
    let year = now.getFullYear();

    // display the current  date
   
    let date = document.getElementById('date');
    date.textContent = month + '/' + day + "/" + year;

}

// call updateTime function every second
updateDate()





