# Yahoo Finance Expression Rating

Daily facial expression sentiment analysis of Yahoo Finance's main photo.

## What is this?

Every day at 10 AM EST, an AI analyzes the facial expressions of people in Yahoo Finance's main photo and rates their apparent sentiment about the stock market from 1-10.

- **1-3**: Negative/worried sentiment (red)
- **4-5**: Concerned/cautious sentiment (orange)
- **6-7**: Mixed/neutral sentiment (yellow)
- **8-10**: Positive/optimistic sentiment (green)

## Features

- 📊 Daily sentiment rating with detailed analysis
- 📸 Screenshot of the analyzed photo
- 📈 7-day historical bar chart
- 🖼️ Thumbnail previews on hover

## Tech Stack

- **Frontend**: Vanilla HTML/JS + Chart.js
- **Backend**: Vercel Serverless Functions (Node.js)
- **Automation**: OpenClaw cron job with browser automation
- **Hosting**: Vercel

## API Endpoints

- `GET /api/latest-rating` - Returns the most recent rating
- `GET /api/history-7days` - Returns last 7 days of ratings

## Local Development

```bash
npm install -g vercel
vercel dev
```

## Data Updates

Data is automatically updated daily via OpenClaw cron job which:
1. Navigates to Yahoo Finance
2. Takes a screenshot
3. Analyzes facial expressions using AI
4. Commits and pushes updates to this repo
5. Vercel auto-deploys on push

## License

MIT
