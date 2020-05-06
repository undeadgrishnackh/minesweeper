FROM node:8
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm run fix-security-audit

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]