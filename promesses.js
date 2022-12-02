const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
  ]
  
function displayPosts(){
    posts.forEach((post) => {
        output = post.title;
        console.log(output);
    })
      
  }
  
/*function creatPost(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            posts.push({title:'post three', body:'this is post three'});
            console.log('Post added succesfully');
            const er=false
            if (!er){
                res()
            }else{
                rej('Une erreur s\'est produite')
            }

          }, 3000);
    })
}
*/  
const creatPost = new Promise((res, rej)=>{
    setTimeout(() => {
        posts.push({title:'post three', body:'this is post three'});
        console.log('Post Three is succesfully added');
        res()
    }, 3000);
})
  creatPost.then(displayPosts)

  //creatPost({title:'post three', body:'this is post three'}, getPosts)

  //المعطل كيعنق  الزربان
  // اللي خاص يتنفذ الاول كيعيط على اللي خاص يتنفذ الثاني