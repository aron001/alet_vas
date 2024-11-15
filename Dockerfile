# Stage 1: Install Dependencies
FROM node:18-alpine AS dependencies

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Stage 2: Build Application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy source code and installed dependencies
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Stage 3: Production Image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built application and production dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
