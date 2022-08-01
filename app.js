
function getBooks(){
    let isbn = document.getElementById('insertBook').value;

    fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    .then(res => res.json())
    .then(res => {
        console.log(res.data);
    }).catch(err => 
        console.warn(`error`, err));
}