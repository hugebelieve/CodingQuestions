# Dispatch Optimization
- Google S2 library - divide map in tiny cells with cell ID
- So for mapping supply & demand
> Take demand GPS form circle and see cells in that circle, then taxi associated with that cell
- Again NodeJS is used
- Consistent Hashing (Ring Structure) or all worker
- RPC to make call between server
- Each server or worker will handle specific cell ID
- Gossip protocol so that every server can transfer a request to a server which handles a particular cell

# ETA
- Uber currently uses google API for this
- Also Uber tracks/trace the rides data and cab movement data to pre-calculate this ETA

# Preferred access point
- System learn these as where the cab have stopped previously

# Load balance
- Layer 3 - IP level load balance
- layer 5 - DNS based load balancing
- layer 7 - Application logic based load balancing

# Data of location from Cab
- Put to Kafka API and Kafka Que and also to DB and also to Dispatch Optimization

# Web Socket
- Asynchronous way of sending message to client at *any point of time*
- NodeJS

# Database
- MongoDB similar

# Analytics
- Understand the data

# BackUp System
- All ride data is also saved in the devices the locally
- On system failure backup system will use the local mobile to complete the ride a head

# All Logs to Kafka que
- Then passed to Kibana to show on dashboard

