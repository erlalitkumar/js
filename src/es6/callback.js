const main = document.querySelector('main');

const posts = [{
  title: 'Post one',
  body: 'This is post one',
},
{
  title: 'Post Two',
  body: 'This is post Two',
},
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
      main.innerHTML = output;
    });
  }, 1000);
}
function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
// getPosts();
createPosts({ title: 'post Three', body: 'This is post three' }, getPosts);
