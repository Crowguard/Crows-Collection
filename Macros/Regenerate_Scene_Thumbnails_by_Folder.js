const root = game.folders.getName("Folder");
const scenes = game.folders.filter(f => f.ancestors.includes(root)).flatMap(f => f.contents).concat(root.contents);
for(const scene of scenes) await scene.createThumbnail({img: scene.img});
