function loadComments() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('comments').innerHTML = '';
            var result = this.responseText;

            var results = JSON.parse(result);

            results.forEach((comment) => {
                var node = document.createElement("div");
                var nodeT = document.createElement("div");
                var message = document.createElement("P");
                var buttom = document.createElement('buttom');

                var comments = [];
                comments[comment.ID] = comment.comment;

                node.className = 'col-sm-9';
                nodeT.className = 'col-sm-3'
                message.className = 'text-justify';
                buttom.className = "btn btn-sm btn-outline-secondary fw-bold border-white";
                buttom.id = comment.ID;
                buttom.addEventListener("click", (e) => {
                    console.log(comment.ID);
                    console.log(comments[comment.ID]);
                });

                var textMessage = document.createTextNode(comment.comment);
                var buttomText = document.createTextNode("Ouvir");

                message.appendChild(textMessage);
                buttom.appendChild(buttomText);

                node.appendChild(message);
                nodeT.appendChild(buttom);

                document.getElementById('comments').appendChild(node);
                document.getElementById('comments').appendChild(nodeT);

            });
        }
    }

    xhttp.open("GET", "/home", true);
    xhttp.send();
}



function insertComment() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            console.log(result);
            loadComments();
        }
    }

    var message = document.getElementById('message').value;


    xhttp.open("POST", "/insert", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"message":"' + message + '"}');

}