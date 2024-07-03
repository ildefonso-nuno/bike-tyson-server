# Bike Tyson Server

This is the backend server for the Bike Tyson application.

## Prerequisites

- Node.js (v21 or higher)
- Docker (for running the database)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/ildefonso-nuno/bike-tyson-server.git
cd bike-tyson-server
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. Here's an example:

```env
PORT=3000

# PostgreSQL Configuration
POSTGRES_USER=*****
POSTGRES_PASSWORD=*****
POSTGRES_DB=*****
PGDATA=*****

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}

# Prisma Configuration (Optional, if using Prisma)
PRISMA_LOG_LEVEL=info

# JWT
JWT_SECRET=*****

# Nodemail
EMAIL=*****
EMAIL_PASS=*****

# Courier.com
COURIER_API_KEY='*****'

# GCloud Credentials
GOOGLE_CLOUD_PROJECT_ID=*****
GOOGLE_CLOUD_KEYFILE_PATH=*****
BICYCLE_BUCKET_NAME=*****

GOOGLE_CLIENT_ID=*****
GOOGLE_CLIENT_SECRET=*****
GOOGLE_REDIRECT_URI=https://localhost:3000/auth/google/callback
```

### 4. Start the Database

Ensure Docker is running on your machine. To start the database, run:

```sh
npm run start:db
```

### 5. Create the Database

Run the following command to create the database schema:

```sh
npm run db:migrate
```

### 6. Feed the Database

To seed the database with initial data, run:

```sh
npm run db:seed
npx ts-node db/scripts/import-policereports.ts
```

### 7. Start the Server

Once the database is set up and seeded, you can start the server:

```sh
npm run start
```

The server should now be running at `http://localhost:3000`.

## Available Scripts

- `npm run start:db`: Starts the database using Docker.
- `npm run db:migrate`: Runs the database migrations to create the schema.
- `npm run db:seed`: Seeds the database with initial data.
- `npx ts-node db/scripts/import-policereports.ts`: Imports police reports into the database.
- `npm run start`: Starts the backend server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
