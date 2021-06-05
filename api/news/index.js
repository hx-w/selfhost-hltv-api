const HLTV = require('hltv-api').default

module.exports = async(req, res) => {
  const news = await HLTV.getNews()
  res.json(news)
}
