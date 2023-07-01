var post = new Post('JavaScript' , 'Hello Megajs', 'Mohammad reza HAJI MAGHSOODI')
console.log(post)


// constructor
function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.commnet = [],
    this.views = 0,
    this.isLive = false
}