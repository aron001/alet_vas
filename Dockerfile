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

# Production stage
FROM node:20-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/next.config.js ./
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/.next ./
COPY --from=build /app/public ./

# Install only production dependencies
RUN npm install --production --legacy-peer-deps --verbose

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
