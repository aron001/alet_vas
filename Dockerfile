# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm cache clean --force && npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build and export the Next.js app to static files
RUN npm run build && npm run export

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the exported static files from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 for serving the static files
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
