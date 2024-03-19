function drawPlayer(player){
    const bodyElem = document.querySelector('body');

    const div = document.createElement('div');
    div.classList.add('div-style')
    bodyElem.append(div);

    const img = document.createElement('img');
    img.src = player.img;
    img.classList.add('img-style');
    div.append(img);

    const span = document.createElement('span');
    span.textContent = player.name;
    div.append(span);
}

