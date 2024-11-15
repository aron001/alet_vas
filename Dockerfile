# Use Node.js 20.x as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies needed for building native modules
RUN apk add --no-cache \
    bash \
    build-base \
    python3 \
    g++ \
    libc-dev \
    && npm install -g npm@latest  # Ensure latest npm version is installed

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Clean npm cache
RUN npm cache clean --force

# Install dependencies
RUN npm install --legacy-peer-deps --verbose

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build --verbose

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
