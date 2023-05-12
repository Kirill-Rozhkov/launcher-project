export function filterText(text, games) {
    const textLength = text.length
    return games.filter(
        (game) =>
            game.title.slice(0, textLength).toLowerCase() === text.toLowerCase()
    )
}
