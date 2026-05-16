# Deploying CHS Quiz with Vercel + Neon

This project is a static frontend (`index.html`, `game.js`, `style.css`) with Vercel serverless API routes for:

- quiz event tracking (`/api/events`)
- email signup capture (`/api/subscribers`)

Both routes write to PostgreSQL on Neon.

## 1) Create a Neon project

1. Create a Neon project/database.
2. Copy the connection string (`postgresql://...`) for the database.
3. Save it for Vercel as `DATABASE_URL`.

> The API routes auto-create required tables on first write:
> - `quiz_events`
> - `email_subscribers`

## 2) Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Framework preset: **Other** (no build step required).
3. Add environment variable:
   - `DATABASE_URL` = your Neon connection string
4. Deploy.

## 3) Connect your custom domain

1. In Vercel project settings, open **Domains**.
2. Add your custom domain.
3. Update DNS records at your registrar to the values shown by Vercel.
4. Wait for SSL/TLS provisioning to complete.

## 4) Verify

1. Open the deployed quiz URL.
2. Start a game and complete at least one chapter.
3. Finish the game and submit an email in the epilogue form.
4. Confirm rows appear in Neon tables:
   - `quiz_events` (game_started, answer_submitted, game_completed, email_subscribed)
   - `email_subscribers`
