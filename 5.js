async function getSomePost(url, id) {
  let user;
  await fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for(let i = 0; i < data.length; i++) {
      if(data[i].id == id) {
        user = data[i];
      }
      else { continue }
    }
  })
  return user;
}

getSomePost('https://jsonplaceholder.typicode.com/posts', 5);