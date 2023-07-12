class News {
  constructor() {
    this.APIkey = "7b7ed3f73a0d4d1aafacd20f2ba7bc10";
  }

  queryAPI(newsName, country, category) {
    let url = 'https://newsapi.org/v2/'

    if (country === '' && category === '') {
      url += "everything?";
    } else {
      url += "top-headlines?";
    }

    if (newsName !== '') {
      url += `q=${newsName}&`;
    }
    if (country !== '') {
      url += `country=${country}&`;
    }
    if (category !== '') {
      url += `category=${category}&`;
    }
    url += `apiKey=${this.APIkey}`;

    console.log(url);
  }
}
