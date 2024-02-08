# Twitter/X Metrics Dashboard

Hey there! 👋 Welcome to the repository for a cool project I've been working on: a dashboard that tracks Twitter and X platform follower stats using APIs and GitHub Actions. It's all about making those metrics tangible and automatically updated, so I can focus on hitting my goals without sweating the manual tracking.

## What's This About?

In a nutshell, I wanted to keep tabs on how my efforts in publishing and sharing my work impact my social media following. So, I built this little dashboard to monitor the follower stats over time. It's a neat way to visualize progress and keep myself accountable.

The setup involves fetching data from Twitter (and potentially other platforms like X), saving it, and displaying it on a simple, auto-updating dashboard hosted with GitHub Pages. Best part? It's totally free to run!

## Tutorial

For a step-by-step guide on how to build your own version of this dashboard, check out my blog post: [Create a dashboard to track your Twitter/X follower stats with APIs and GitHub Actions](https://horosin.com).

## Features

- **Data Fetching**: Grabs your latest follower stats using Twitter API.
- **Data Storage**: Saves your stats over time in a JSON file within the repo.
- **Automation**: Uses GitHub Actions to update your stats daily, automatically.
- **Visualization**: Presents the data on a simple, interactive dashboard using Chart.js.
- **Zero Cost**: Runs on GitHub's free tier, including compute and hosting.

## Quick Setup

1. **Twitter App & API Keys**: You'll need to set up a Twitter developer account and create an app to get your API keys. [Here's how](https://developer.twitter.com/en/portal/dashboard).
2. **GitHub Repo**: Fork or clone this repo, for details, check out the the blog post.
3. **Environment Variables**: Make sure to add your Twitter API keys as secrets in your GitHub repository settings.

## Running Locally

If you want to test things out or make modifications, here's how to get started:

```bash
# Clone the repository
git clone https://github.com/horosin/metrics-dashboard

# Navigate to the project directory
cd metrics-dashboard

# Install dependencies
npm install

# Set up your .env file with Twitter API keys
echo "TWITTER_API_KEY='your_key_here'" > .env
echo "TWITTER_API_SECRET='your_secret_here'" >> .env
echo "TWITTER_ACCESS_TOKEN='your_token_here'" >> .env
echo "TWITTER_ACCESS_SECRET='your_access_secret_here'" >> .env

# Run the data fetching script (replace x_fetch_data.js with the actual script name if different)
node x_fetch_data.js
```

## Check Out the Dashboard

Curious to see it in action? Take a peek at the live dashboard here: [https://horosin.github.io/metrics-dashboard/](https://horosin.github.io/metrics-dashboard/).

## Feedback & Contributions

Loved this project? Got ideas on how to improve it or extend it to other platforms? Feel free to fork, star, and contribute. Any feedback is welcome!

Happy tracking! 🚀

P.S. Don't forget to visit my blog for more cool projects and tutorials: [horosin.com](https://horosin.com).
