    
    let array = Array();

    function add() {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let date = new Date();
        let month = date.getMonth()
        let m = months[month]
        let day = date.getDate()
        let year = date.getFullYear()
        let d = day + "/" + m + "/" + year
        let notes = localStorage.getItem("notes");
        let addTxt = document.getElementById("text1");
        if ((document.getElementById('text1').value) == '') {
            document.getElementById("Result").innerHTML = 'arrey empty';
            return true;
        }
        else if (notes === null) {
            array = [];
        }
        else {
            array = JSON.parse(notes);
        }
        array.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(array));
        addTxt.value = "";
        view();
    }

    function view() {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let date = new Date();
        var month = date.getMonth()
        let m = months[month]
        var day = date.getDate()
        var year = date.getFullYear()
        var d = day + "-" + m + "-" + year
        var e = "<tr><th>No</th><th>Notes</th><th>Date</th><th></th></tr>";
        let notes = localStorage.getItem("notes");
        console.log(notes);
        if (notes == null) {
            array = [];
        }
        else {
            array = JSON.parse(notes);
        }
        array.forEach(function (element, index) {
            e += `<tr><td>${index + 1} </td><td> ${element} </td><td>${d}</td><td><button id="${index}"onclick="remove(this.id)">Erase</button></td></tr>`;
        });
        document.getElementById("Result").innerHTML = e;
        let notesElm = document.getElementById("Result");
        if (array.length != 0) {
            notesElm.innerHTML = e;
        } else {
            notesElm.innerHTML = `Nothing to show! write something and click on 'Add' to add notes.`;
        }
    }
    function remove(index) {
        //console.log("I am deleting", index);

        let notes = localStorage.getItem("notes");
        if (notes == null) {
            array = [];
        }

        else {
            array = JSON.parse(notes);
        }

        array.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(array));
        view();
    }