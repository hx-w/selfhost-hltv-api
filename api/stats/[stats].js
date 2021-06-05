const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  var matchId = req.query.stats
  matchId = matchId.split('_').join('/')
  const stats = await HLTV.getStatsByMatchId(matchId)
  res.json(stats)
}
