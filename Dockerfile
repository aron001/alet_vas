# Use the official Node.js LTS image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package files to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
