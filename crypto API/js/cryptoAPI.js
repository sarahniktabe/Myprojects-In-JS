class CryptoAPI {
  constructor() {
    this.apiKey = "112f189ffe9e2f216e6453be5727b991";
  }
  async queryAPI(currency,cryptocurrency) {
    let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`;
    const response = await fetch(url);

    const resultApi = await response.json();
    return {
      resultApi,
    };
  }
}
