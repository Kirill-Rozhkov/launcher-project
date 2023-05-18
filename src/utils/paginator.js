export function paginator(games, counter, pageSize) {
    return games.slice(0, pageSize * counter)
}
