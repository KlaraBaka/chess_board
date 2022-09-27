function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let sig = true;
    let i = 0;

    while (i<8){
        for (let k = 0; k<8; k++){
            if(k==0) sig = !sig;

            block = document.createElement('div');

            if(sig) block.className = 'block palevioletred';
            else block.className = 'block white';

            mainBlock.appendChild(block);
            sig = !sig;
        }
        i++;
    }
}

drawChess();