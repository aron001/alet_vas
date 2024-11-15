# Base image with a stable Node.js version
FROM node:18

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json first
COPY package.json package-lock.json ./

# Clean npm cache to prevent dependency conflicts
RUN npm cache clean --force

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Expose the app port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
