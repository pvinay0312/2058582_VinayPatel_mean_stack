function add() {
    var new_data = {
        clientname: document.getElementById('clientname').value,
        projectname: document.getElementById('projectname').value,
        budget: document.getElementById('budget').value
    };

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    console.log(old_data);
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data));

    alert('Budget Added!!')
}

function funClear() {
    document.getElementById('clientname').value = '';
    document.getElementById('projectname').value = '';
    document.getElementById('budget').value = '';

}

