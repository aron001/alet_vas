# Start with a stable node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json initially to utilize Docker cache
COPY package.json package-lock.json ./

# Clean npm cache and install dependencies with verbose logging
RUN npm cache clean --force && npm install --legacy-peer-deps --verbose

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the app's port
EXPOSE 3000

# Run the app in production mode
CMD ["npm", "run", "start"]
