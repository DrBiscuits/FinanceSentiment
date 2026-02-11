import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    const ratingsPath = join(process.cwd(), 'data', 'ratings');
    
    // Generate dates for last 7 days
    const today = new Date();
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    // Read ratings for each date
    const ratings = [];
    const images = [];
    
    for (const date of dates) {
      const ratingFile = join(ratingsPath, `${date}.json`);
      
      if (existsSync(ratingFile)) {
        const data = JSON.parse(readFileSync(ratingFile, 'utf8'));
        ratings.push(data.rating);
        images.push(`/screenshots/${date}-screenshot.png`);
      } else {
        ratings.push(null);
        images.push(null);
      }
    }
    
    res.status(200).json({ dates, ratings, images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
