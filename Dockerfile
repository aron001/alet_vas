# Use a stable node image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn

# Copy only package.json to avoid unnecessary re-installation of dependencies
COPY package.json ./

# Install dependencies using yarn (this will also generate yarn.lock file)
RUN yarn install --frozen-lockfile --verbose

# Copy the rest of your application files
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the app port (usually 3000 for Next.js)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["yarn", "start"]
