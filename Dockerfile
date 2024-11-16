# Use a Node.js image as the base
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Use a production-ready Node.js image for serving
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app ./

# Install production dependencies only
RUN npm install --legacy-peer-deps --production

# Expose the app's port
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]
