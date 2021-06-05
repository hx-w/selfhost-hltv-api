const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  console.log(req)
  const stats = await HLTV.getStatsByMatchId(req.params)
  res.json(stats)
}
