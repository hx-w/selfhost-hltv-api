const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  const results = await HLTV.getResults()
  res.json(results)
}
