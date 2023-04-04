const colors = [
    "#ef0b0b",
    "#130ff5",
    "#19bf0d"
];

const light = game.scenes.current.lights.get("WBknsiVH08Wc9tEt"); //The ID of your light goes where "WBknsiVH08Wc9tEt" is

if ( colors.findIndex(c => c === light.config.color) + 1 === colors.length || !colors.includes(light.config.color) ) {
    await light.update( { config: { color: colors[0] } } );
}
else {
    const index = colors.findIndex(c => c === light.config.color) + 1;
    await light.update( { config: { color: colors[index] } } );
}
