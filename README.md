## Modbus
[![Generic badge](https://img.shields.io/badge/typescript-^4.1.3-blue.svg)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/modbusws-^2.2.0-green.svg)](https://shields.io/)

The modbus-ws server allows a browser to connect to a modbus device, using websockets. When the server is running, and connected to Serial line or Ethernet, a web browser can send web socket requests and control a modbus device.

With this server you can build web pages that will easily monitor and send requests to your modbus project or robot.

# 

Before running the server:

`npm install modbus-ws -g`

Run the server from the command line:

`npm run server`

After running the server will print out this message to the console:

```
----------------------------------------------------
Modbus-WS server 1.1.1
    Setup serial port: /dev/ttyUSB0 9600
    Server is running, http://127.0.0.1:3000
    Setup modbus with caching.
        Create cache db.
        Create cache table
----------------------------------------------------
```

Test your client:

`npm run client`