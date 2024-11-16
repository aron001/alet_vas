# Use Node.js 20.x as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Clean npm cache
RUN npm cache clean --force

# Install Next.js individually
RUN npm install next@15.0.2 --legacy-peer-deps

# Install React and React DOM individually
RUN npm install react@19.0.0-rc-02c0e824-20241028 react-dom@19.0.0-rc-02c0e824-20241028 --legacy-peer-deps

# Install other dependencies and devDependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
