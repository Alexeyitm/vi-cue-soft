class Api {
  constructor(options) {
    
    this._baseUrl = options.baseUrl;

    this._getJSON = function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // Получаем массив карточек пива
  getBeer(page) {
    return fetch(`${this._baseUrl}/beers?page=${page}&per_page=20`, {
      method: 'GET',
    })
    .then(res => this._getJSON(res))
  }
  
  // Получаем случайную карточку пива
  getRandomBeer() {
    return fetch(`${this._baseUrl}/beers/random`, {
      method: 'GET',
    })
    .then(res => this._getJSON(res))
  }
  
  // Получаем карточки пива по названию
  getBeerByName(name) {
    return fetch(`${this._baseUrl}/beers?beer_name=${name}`, {
      method: 'GET',
    })
    .then(res => this._getJSON(res))
  }
}

export const api = new Api({
  baseUrl: 'https://api.punkapi.com/v2',
});