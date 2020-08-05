FROM cypress/included:4.12.1

COPY . /app
WORKDIR /app

RUN npm install -only=production
