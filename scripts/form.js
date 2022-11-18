function deleteText(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('subject').value='';
    document.getElementById('message').value='';
}

function submitAlert(){
    alert("Email sent!");
    deleteText();
}

function cancel(){
    var i = confirm("Are you sure?");
    if (i == true){
        deleteText();
    }
}