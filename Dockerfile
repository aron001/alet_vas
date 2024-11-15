# Base image with Node.js
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port for the application
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
