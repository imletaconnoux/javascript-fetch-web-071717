fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));


const token = 'YOUR TOKEN HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
