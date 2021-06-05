const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
 // const stats = await HLTV.getStatsByMatchId(req.params)
 // res.json(stats)
  res.send(`hello ${req.query.stats}`)
}
