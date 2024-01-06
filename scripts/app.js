// Adding eventlisteners

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

const cancelOverlayBtnElement = document.getElementById('cancel-overlay');


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelOverlayBtnElement.addEventListener('click', cancelConfigOverlay);
backdropElement.addEventListener('click', cancelConfigOverlay)