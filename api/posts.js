export default {
    getPosts (cb) {
        setTimeout(() => cb(_posts), 1000)
      },
      searchPosts(cb) {
         return cb(_posts)
      }
}

const _posts =[
    {
        id:1,
        title:'Post 2 Title',
        img: 'https://picsum.photos/600/300/?image=25',
        content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
     },
     {
        id:2,
        title:'Post 1 Title',
        img: 'https://picsum.photos/600/300/?image=25',
        content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
     },
     {
        id:3,
        title:'Post 3 Title',
        img: 'https://picsum.photos/600/300/?image=25',
        content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
     } 
]