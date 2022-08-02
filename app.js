function getBooks() {
  let isbn = document.getElementById("insertBook").value;

  fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    .then((res) => res.json())

    .then((res) => {
      let title = res;
      title.map(`${full_title}`);
      document.getElementById("titleData").value = title;
    })
    .catch((err) => console.warn(`error`, err));
}
