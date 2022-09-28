// Deletes all items that are not in a folder. Cannot be undone.
// Macro by unknown
// V9-V10
Item.deleteDocuments(game.items.filter(i=>!i.folder).map(i=>i.id))
