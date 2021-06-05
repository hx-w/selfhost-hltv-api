const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  const matches = await HLTV.getMatches()
  res.json(matches)
}
