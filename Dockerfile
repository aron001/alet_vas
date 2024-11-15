# Use Node.js 20.x as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies that are needed for the build
RUN apk add --no-cache \
    bash \
    build-base \
    python3

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install --legacy-peer-deps --verbose

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build --verbose

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
