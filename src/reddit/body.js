const hScore = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total() {
        return this[1] + this[2] + this[3] + this[4]
    }
}
const aScore = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total() {
        return this[1] + this[2] + this[3] + this[4]
    }
}

const _boxScore = (home,away)  => {
    return `
|            |1st         |2nd         |3rd         |4th         |Final            |
|:--         |:--         |:--         |:--         |:--         |:--              |
|${home.name}|${hScore[1]}|${hScore[2]}|${hScore[3]}|${hScore[4]}|${hScore.total()}|
|${away.name}|${aScore[1]}|${aScore[2]}|${aScore[3]}|${aScore[4]}|${aScore.total()}|
`
}

const _stadiumInfo = `
|                |                             |
|:--             |:--                          |
|**Arena**       |Footpoot Center Phoenix,AZ   |
|**TV (Home)**   |[TNT][url-1]                 |
|**TV (Away)**   |[SN][url-2]                  |
|**Radio (Home)**|[KMVP 98.7 / S: KSUN][url-3] |
|**Radio (Away)**|[ESPN LA 710/KWKW (S)][url-4]| 

[url-1]: https://www.tntdrama.com/nba-on-tnt
[url-2]: https://www.nba.com/watch/nba-tv
[url-3]: https://www.google.com/search?q=KMVP+98.7+%2F+S%3A+KSUN
[url-4]: https://www.google.com/search?q=ESPN+LA+710%2FKWKW+%28S%29
`


export async function body(home,away) {
    const _score = await _boxScore(home,away)

    return `
---
${_stadiumInfo}
---
${_score}
---
`
}