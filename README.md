# simpleasyncapi
A project that demonstrates the essential concepts of the Async API specification. To view the project's specification in the Async API Playground go [here](https://playground.asyncapi.io/?load=https://raw.githubusercontent.com/reselbob/simpleasyncapi/main/gen/asyncapi.yaml).

# Autogenerate a MQTT broker for the Wise Sayings async API

## Run this code in a Katacoda Ubuntu playground

**Step 1:** Go to

`https://katacoda.com/courses/ubuntu/playground`

**Step 2:** Clone the respository code:

`git clone https://github.com/reselbob/simpleasyncapi.git`

**Step 3:** Navigate to the working directory of the `gen` folder

`cd simpleasyncapi/gen`

**Step 4:** Add the Node.js packages

`npm install`

**Step 5:**  Run the code

`node index.js`

**Step 6:** Navigate to the generated `output` directory

`cd ../output`

**Step 7:** Add the Node.js packages

`npm install`

**Step 8:** Start up Mosquitto

`npm start`

You'll get output as follows:

```
 SUB  Subscribed to wisesaying
 PUB  Will eventually publish to wisesaying
Wise Sayings API 1.0.0 is ready! 

🔗  MQTT adapter is connected!

```

# Install the MQTT command line tool

`npm install mqtt -g`

# Run the Subscriber to the Wise Sayings async API.

`mqtt sub -t 'hello' -h 'test.mosquitto.org' -v`

# Run the producer to the Wise Sayings async API.

`mqtt pub -t 'hello' -h 'test.mosquitto.org' -m 'from MQTT.js'`

**Sample message**

```
{
  "id": "64371915-6834-45cd-a315-ae900b532e6b",
  "sender": "Donald Duck",
  "target": {
    "recipient": "Daisy Duck",
    "identifier": "210-223-7010",
    "carrierType": "SMS"
  },
  "wisesaying": "Alls well that ends well",
  "sentAt": "2021-03-12T17:23:12.000Z"
}

```

