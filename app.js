function getBooks() {
  let isbn = document.getElementById("insertBook").value; // getting the value from user input text field
  let isbn2 = isbn.trim(); // trim incase user added a space at the front
  // clearing all the fields
  document.getElementById("dateData").innerHTML = "";
  document.getElementById("titleData").innerHTML = "";
  document.getElementById("pubData").innerHTML = "";
  document.getElementById("someoneData").innerHTML = "";
  // fetching the data using the API
  fetch(`https://openlibrary.org/isbn/${isbn2}.json`)
    // getting it in json format
    .then((res) => res.json())
    // console log the json (don't really need to do this just easier to read)
    .then((res) => {
      console.log(res);
      // filling the data with the res object
      document.getElementById("dateData").innerHTML = res.publish_date;
      document.getElementById("titleData").innerHTML = res.title;
      document.getElementById("pubData").innerHTML = res.publishers;
      // How to get the website from this data??
      // document.getElementById("buyData").innerHTML = res.source_records[0];
      // if the json has this object
      if (res.authors.length >= 1) {
        // for some reason, the api sets the author in an array
        let author = res.authors[0].key;
        // calling another api to get author information
        fetch(`https://openlibrary.org${author}.json`)
          .then((res) => res.json())
          .then((res) => {
            // fill in author data
            document.getElementById("someoneData").innerHTML = res.name;
            // let name = res.name;
            // let name2 = name.trim();
            // fetch(
            //   `https://en.wikipedia.org/w/api.php?action=opensearch&search=${name2}&limit=1&format=json`
            // )
            //   .then((res) => res.json())
            //   .then((res) => {
            //     console.log(res);
            //   });
          });
      }
    })
    .catch((err) => console.warn(`error`, err));
}
