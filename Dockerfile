# Use Node.js LTS version (Debian-based for better compatibility)
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y python3 build-essential && rm -rf /var/lib/apt/lists/*

# Copy only the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Run the application in production mode
CMD ["npm", "start"]
