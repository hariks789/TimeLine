function parseJson(resp) {
  console.log('resp', resp);
  return resp.text()
    .then((result) => {
      try {
        console.log('result', JSON.parse(result));
        return JSON.parse(result);
      } catch(err) {
        return { status: resp.status };
      }
    });
}

class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
    };
  }

  static get(route, token) {
    return this.xhr(route, null, 'GET', token);
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params, token) {
    return this.xhr(route, params, 'POST', token);
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  // static photoUpload(params, id, token, callback) {
  //   let xhr = new XMLHttpRequest();
  //   let body = new FormData();
  //   body.append('file', params);
  //   xhr.open('POST', `url`);
  //   xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  //   xhr.send(body);
  //   xhr.onreadystatechange = (e) => {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       return callback(JSON.parse(xhr.responseText));
  //     } else {
  //       null
  //     }
  //   }
  // }

  static xhr(route, params, verb, token) {
    const host = 'https://www.thetimelines.org/api';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    if(route === '/login') {
      options.headers =
      {
        'Authorization': `${token}`,
      };
    } else {
      if(token) {
        options.headers =
        {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
      } else{
        options.headers =
        {
          'Content-Type': 'application/json'
        };
      }
    }
    console.log('url', url, 'params:', options, params);
    return fetch(url, options)
    .then((res) => parseJson(res))
    .catch((error, responseJson) => {
      // console.log('errorAPI', error, responseJson);
      return { status: 0 }
    });
  }
}

export default Api;
