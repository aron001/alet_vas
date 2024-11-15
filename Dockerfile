# Use Node.js 20.x as the base image
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Install dependencies with verbose logging
RUN npm install --legacy-peer-deps --verbose

# Copy the rest of the application code
COPY . .

# Build the Next.js app with verbose logging
RUN npm run build --verbose

# For testing purposes, let's just expose the port and run the app
EXPOSE 3000
CMD ["npm", "run", "start"]
