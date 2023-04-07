// Deletes all scenes NOT inside a folder.
Scene.deleteDocuments(game.scenes.filter(i=>!i.folder).map(i=>i.id))
