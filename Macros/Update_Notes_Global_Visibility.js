// Updates the global visibility of all notes on your current scene.

for (let note of game.canvas.scene.notes) {
    await note.update({global: true});
}
