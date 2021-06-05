const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
 // const stats = await HLTV.getStatsByMatchId(req.params)
 // res.json(stats)
  const {
    query: { name },
  } = req
  res.send(`hello ${name}`)
}
