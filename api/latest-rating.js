const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const dataPath = path.join(process.cwd(), 'data', 'latest-rating.json');
    
    if (!fs.existsSync(dataPath)) {
      return res.status(200).json({ error: 'No ratings yet' });
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Convert screenshot path to web URL
    if (data.date) {
      data.screenshot = `/screenshots/${data.date}-screenshot.png`;
    }
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
