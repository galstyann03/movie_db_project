# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose the app port
EXPOSE 3000

CMD ["npm", "run", "build"]