// getting the reference of <main></main> form the Html file.
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

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false; // true for error
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}
// createPosts({
//   title: 'post Three',
//   body: 'This is post three',
// }).then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

// async //await // 
// async function init() {
//   await createPosts({
//     title: 'post Three',
//     body: 'This is post three',
//   });
//   getPosts();
// }
// init();

// async // wait // fetch
async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUser();


// promise.all
// const promise1 = Promise.resolve('Hello world!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, _) =>
//   setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4])
//   .then(values => console.log(values));
