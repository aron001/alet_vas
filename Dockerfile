# Step 1: Use a stable Node.js LTS version
FROM node:18-bullseye-slim

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock if you are using yarn)
COPY package.json package-lock.json ./

# Step 4: Clean npm cache to prevent potential issues
RUN npm cache clean --force

# Step 5: Install dependencies with legacy peer dependencies option
RUN npm install --legacy-peer-deps

# Step 6: Copy the rest of the application source code
COPY . .

# Step 7: Build the application
RUN npm run build

# Step 8: Expose the application port
EXPOSE 3000

# Step 9: Start the application
CMD ["npm", "start"]
