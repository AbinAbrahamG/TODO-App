function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var todos = JSON.parse(this.responseText);
            display(todos);
            addEventListeners(todos); // Add event listeners after displaying
        } else {
            console.error("Failed to fetch data");
        }
    };

    xhr.onerror = function () {
        console.error("Request error");
    };

    xhr.send();
}

function display(todos) {
    let table1 = document.getElementById('tabledata').getElementsByTagName('tbody')[0];
    for (let i = 0; i < todos.length; i++) {
        let rowcount = table1.rows.length;
        var row = table1.insertRow(rowcount);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = todos[i].id;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = todos[i].title;
        let cell3 = row.insertCell(2);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todos[i].completed;
        checkbox.id = 'checkbox_' + todos[i].id; // Add an id for easy reference
        cell3.appendChild(checkbox);
    }
}

        // Add event listeners to each checkbox
        function addEventListeners(todos) {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', function () {
                    validateCompletedTasks(todos); // Re-validate on every checkbox change
                });
            });
        }

        // Validate if at least 5 tasks are completed
        function validateCompletedTasks(todos) {
            // Create a Promise to check if 5 tasks are completed
            const validationPromise = new Promise((resolve, reject) => {
                let completedCount = 0;

                // Count how many tasks are marked as completed (checked)
                todos.forEach((todo) => {
                    const checkbox = document.getElementById('checkbox_' + todo.id);
                    if (checkbox && checkbox.checked) {
                        completedCount++;
                    }
                });

                // If at least 5 tasks are completed, resolve the Promise
                if (completedCount % 5 === 0 && completedCount > 0 ) {
                    resolve("Congrats. 5 Tasks have been Successfully Completed");
                } else {
                    reject();
                }
            });

            // Handle the result of the Promise
            validationPromise
                .then((message) => {
                    alert(message);
                })
                .catch(() => {
                    
                });
        }

fetchData();