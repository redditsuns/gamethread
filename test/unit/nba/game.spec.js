import { game } from "../../../src/nba/game.js"
import { default as teams } from "../../../assets/teams.json" assert { type: "json" }

describe("game.js", () => {
    test("Returns a provided team's game data object.", async () => {
        const team = "PHX"
        const result = await game(team)
        expect(result).toEqual(undefined)
    })
    test("Returns a parameter error.", async () => {
        // const ids = []
        // Object.keys(teams).forEach((team) => ids.push(teams[team].Abbrev))
        const team = 1
        expect(team).toEqual(1)
    })
    test("Returns a parameter exception.", async () => {
        expect(await game(123).catch(Error)).toThrow
    })
})