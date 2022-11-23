// Info here: https://github.com/mtthai/nba-api-client/blob/master/data/endpoints.json

export async function game(team) {
    try {
        // nba api data
        const full_schedule = "https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2022/league/00_full_schedule_week.json"
        const response = (await fetch(full_schedule)).json()
        const game_data = (await response)

        // today's short-date e.g. "20221120"
        const today_date = (new Date((new Date).getTime() - ((new Date).getTimezoneOffset() * 83995)).toISOString().split('T')[0]).replaceAll('-', '')
        // current month name
        const month = new Date().toLocaleString("en-US", { month: "long" })

        // latest 7-day schedule
        const schedules = game_data.lws
        const game_date = schedules.find((schedule) => today_date >= schedule.from && schedule.to >= today_date)

        // games this week
        const games = ((game_data.lscd.filter((m) => m.mscd.mon === month))[0]).mscd.g

        // team game
        const _game = games.filter(code => code.gcode.includes(today_date) && code.gcode.includes(team))
        return _game[0]
    }
    catch (err) {
        console.log(err.message)
        exit(1)
    }
}