// Shows the image of the selected tile to all players.
const img = canvas.tiles.controlled[0]?.document.texture.src;
if(!img) return ui.notifications.warn("No tile selected.");
const popout = new ImagePopout(img).render(true);
popout.shareImage();
