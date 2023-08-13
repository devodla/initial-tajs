# Automated Testing Class with JavaScript Like a Pro - Template

You will need to use Node.js on version 20 (or higher) to run the examples

```sh
node -v
# v20.5.0
```

## Running

Restore dependencies and run the project:

```sh
npm ci --silent
npm start
```

Your programme will be running on [http://localhost:3000](http://localhost:3000)

Once the API is running you can run the script that will trigger requests, get the token and display the API response.

To do this run

```sh
./run-api-requests.sh
```

The answer should look like:

```sh
Token captured: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZXJpY2t3ZW5kZWwiLCJtZXNzYWdlIjoiaGV5IGR1dXVkZSEiLCJpYXQiOjE2OTE2OTM4MjF9.VmPc9yY4tTXYQaILbY6JXK8IrmKKK0Z4hveVgRUIV9Y

Private route response: {"result":"Hey welcome!"}
```
