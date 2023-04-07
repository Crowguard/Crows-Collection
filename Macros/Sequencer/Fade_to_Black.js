// Fades Foundry to black, then fades in again.

new Sequence()
    .effect()
    .file("Black_Screen.webp")
    .screenSpace(true)
    .screenSpaceAboveUI(true)
    .xray(true)
    .fadeIn(1000)
    .duration(2500)
    .fadeOut(1500)
    .screenSpaceScale({
      fitX: true,    // Causes the effect to set its width to fit the width of the screen
      fitY: true,    // Causes the effect to set its height to fit the height of the screen
})

  .play()
