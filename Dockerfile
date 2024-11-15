# Use Node.js 20.x as the base image
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Clean npm cache and install dependencies with verbose logging
RUN npm cache clean --force && npm install --legacy-peer-deps --verbose

# Check if npm install was successful
RUN echo "NPM Install Completed" && ls -l /app/node_modules

# Copy the rest of the application code
COPY . .

# Add environment variables if needed (uncomment if applicable)
# ENV NEXT_PUBLIC_API_URL=<your-api-url>

# Build the Next.js app with verbose logging to get more details on any issues
RUN echo "Starting Build Process" && npm run build --verbose

# Check if the build process succeeded
RUN echo "Build Completed" && ls -l /app/.next

# Use a smaller production image for final deployment
FROM node:20-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Install only production dependencies with verbose logging
RUN npm install --production --legacy-peer-deps --verbose

# Copy build files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
