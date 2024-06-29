document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById('course').value;
    var mail = document.getElementById('mail').value;

    var tableBody = document.getElementById('tablebody');
    var newRow = document.createElement('tr');

    var cell1 = document.createElement('td');
    cell1.textContent = name;
    newRow.appendChild(cell1);

    var cell2 = document.createElement('td');
    cell2.textContent = age;
    newRow.appendChild(cell2);

    var cell3 = document.createElement('td');
    cell3.textContent = gender;
    newRow.appendChild(cell3);

    var cell4 = document.createElement('td');
    cell4.textContent = course;
    newRow.appendChild(cell4);

    var cell5 = document.createElement('td');
    cell5.textContent = mail;
    newRow.appendChild(cell5);

    var cell6 = document.createElement('td');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        tableBody.removeChild(newRow);
    };
    cell6.appendChild(deleteBtn);
    newRow.appendChild(cell6);

    tableBody.appendChild(newRow);

    // Clear the form fields
    document.getElementById('studentForm').reset();
});
