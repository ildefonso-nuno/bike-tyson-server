# Stage 1: Build the application and dependencies
FROM node:21 AS build

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install all dependencies, including dev dependencies
RUN npm install

# Rebuild native modules
# RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application code to the container
COPY . .

# Set environment variables for Prisma migration
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Run the Prisma migration and generate commands
RUN npx prisma migrate deploy
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 2: Run the application
FROM node:21

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port the app runs on
EXPOSE 8080

# Run the Prisma generate command
RUN npx prisma generate

# Run the web service on container startup
CMD [ "node", "dist/src/server.js" ]