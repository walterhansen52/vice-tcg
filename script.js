document.getElementById('end-turn').onclick = function () {
    const log = document.getElementById('log');
    const currentVice = parseInt(document.getElementById('vice-counter').innerText);
    const newVice = currentVice + 1;
    document.getElementById('vice-counter').innerText = newVice;
    log.value += `Turn ended. Vice is now ${newVice}\n`;
    log.scrollTop = log.scrollHeight;
};