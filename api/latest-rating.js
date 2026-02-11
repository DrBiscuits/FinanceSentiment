import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'latest-rating.json');
    
    if (!existsSync(dataPath)) {
      return res.status(200).json({ error: 'No ratings yet' });
    }
    
    const data = JSON.parse(readFileSync(dataPath, 'utf8'));
    
    // Convert screenshot path to web URL
    if (data.date) {
      data.screenshot = `/screenshots/${data.date}-screenshot.png`;
    }
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
