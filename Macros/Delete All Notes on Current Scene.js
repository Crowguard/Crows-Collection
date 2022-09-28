// Deletes all the notes on the currently viewed scene.
// Macro by Zhell
// V9-V10
const deleteIds = canvas.scene.notes.map(i => i.id);
await canvas.scene.deleteEmbeddedDocuments("Note", deleteIds);
