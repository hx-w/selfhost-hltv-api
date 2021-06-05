const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  const stats = await HLTV.getStatsByMatchId(req.query.stats)
  res.json(stats)
}
