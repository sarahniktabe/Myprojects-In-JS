class UI {
  constructor(){
    this.result = document.querySelector('#result')
  }
  printMessage(message, className) {
    const div = document.createElement('div');
    div.className = className;
    //div.appendChild(document.createTextNode(message)) //this both are same
    div.innerHTML = message
    document.querySelector('#message').appendChild(div)
    //console.log(div)
    setTimeout(() => {
        this.removemessage()
    }, 3000);

  }
  removemessage(){
    const alert =document.querySelector('.alert');
    if (alert){
        alert.remove();
    }
  }


  showNews(news){
    //console.log(news)
   news.forEach(newsInfo => {
    console.log(newsInfo)
    this.result.innerHTML += `
    <div class="col-md-4 mb-4">
    <div class="card">
        <div class="card-body">
            <h2 class="card-title text-center">${newsInfo.title.split('-',1)}</h2>
            <p class="card-text lead textto-info">news information:</p>
            <span class="badge badge-primary">source: ${newsInfo.source.name}</span>
            <span class="badge badge-primary">Date & time: ${newsInfo.publishedAt}</span>
            <br/>
            <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">Complete News</a>
        </div>
    </div>
</div>
`
   });
  }
}
