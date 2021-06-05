const HLTV = require('hltv-api').default

module.exports = (req, res) => {
  const results = HLTV.getResults()
  res.json(result)
}
