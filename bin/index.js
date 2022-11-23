import { title } from "../src/reddit/title.js"
import { post } from "../src/reddit/post.js"
import dotenv from 'dotenv'
import { default as parameters } from "../meta/parameters.json" assert { type: "json" }

(async () => {
    dotenv.config()
    const { subreddit, team } = parameters
    try {
        const time = gd.stt
        const away = {
            name: gd.v.tn,
            record: gd.v.re,
            city: gd.v.tc
        }
        const home = {
            name: gd.h.tn,
            record: gd.h.re,
            city: gd.h.tc,
            arena_name: gd.ac,
            arena_city: gd.an,
            arena_state: gd.as
        }
        const matchup = `${away.name} (${away.record}) @ ${home.name} (${home.record})`
        const Sub = subreddit
        const Title = title(matchup, time)
        const Body = "await body(home, away)"
        await post(Sub, Title, Body)
    } catch (err) {
        console.err(err.message)
        exit(1)
    }
})()