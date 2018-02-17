let sendAjaxRequest = function (method, url, cb, data='') {
  let req = new XMLHttpRequest();
  req.open(method, url);
  req.addEventListener('load',() => cb(req.responseText));
  req.send(data);
};

window.onload = setInterval(function () {
  let location = window.location.pathname;
  let gameId = location.match(/[0-9]+/g)[0];
  sendAjaxRequest('get',`/game/${gameId}/numOfPlayers`,(res)=>{
    res = JSON.parse(res);
    if(res.start) {
      window.location = res.link;
    }
    document.getElementById('players-joined').innerHTML = res.count;
  });
},1000);