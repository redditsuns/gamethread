import {title} from "../../../src/reddit/title.js"

describe("Should return a valid subreddit title", () => {
    test("Returns a gamethread title string.", () => {
        const matchup = "TEAM1 (0-0) @ TEAM2 (0-0)"
        const time = "10 AM EST"
        const sut = title(matchup,time)
        const result = `[GAME THREAD]: ${matchup} (${time})`
        expect(sut).toEqual(result)
    })
})
