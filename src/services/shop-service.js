export default class ShopService {
  
  _apiBase = '//krapipl.imumk.ru:8082/api/mobilev1/update/';

  _headers = new Headers({
    "Content-Type": "application/json"
  });

  _init = {
    method: 'POST',
    body: JSON.stringify({
      data: ''
    }),
    headers: this._headers
  };

  getResourse = async () => {
    const res = await fetch(this._apiBase, this._init);
    return await res.json();
  }

}

