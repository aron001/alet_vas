# Use Node.js 20.x as the base image
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build --verbose

# Use a smaller production image for final deployment
FROM node:20-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Copy build files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
