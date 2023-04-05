## Development

### setup

1. Fork and clone this repo

   ```sh
   git clone https://github.com/<your-username>/issue-notify.git
   ```

1. Go to the project folder

   ```sh
   cd issue-notify
   ```

1. Install packages with npm

   ```sh
   npm install
   ```

1. Set up your .env file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the .env file.

1. Start the app

   ```sh
   npm run dev
   ```

1. If installing for the first time

   In new terminal

   ```sh
   npx prisma db push
   ```
