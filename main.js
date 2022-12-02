const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'}
]

function getPosts(){
  setTimeout(() => {
    let output=''
    posts.forEach((post, index)=>{
      output=post.title
      console.log(output);
    })
  }, 3000);
}

function creatPost(getP){
  setTimeout(() => {
    posts.push({title:'post three', body:'this is post three'});
    console.log('Post added succesfully');
    getP()
  }, 3000);
  
}

creatPost(getPosts)
//creatPost({title:'post three', body:'this is post three'}, getPosts)