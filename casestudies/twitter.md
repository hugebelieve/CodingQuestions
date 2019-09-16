# 300M User
# 600 write/sec
# 600,000 read/sec

# User timeline

# Redis(in memory) for Non-persistent save(caching)
- Fanout approach
- redis has every user home timeline key
- Person makes a tweet, save in DB
- Add that tweet in that user timeline que in redis
- Also fanout that tweet to all followers timeline que in redis
- For user with big follower of 100k more
- Don't fanout but when the follower comes in take tweet from this nig user timeline redis entry
- Zookeeper for multiple Redis handling

# Trends
- Stream processing framework like apache strom
- Tweet pass to parser
- Use que like kafka que in between
- 1. Goes to geo location mapping
- 2. Count and rate mapping and to rank (use consistent hashing)
- Save to redis of combined 1 and 2

# Search
- Inverted full text Index
- words are mapped in table with tweet id in front of row.
- Have distributed table
- Scatter and gather
- query scatter to all data center
- data center which finds it gives back tweet id

# Like count
- Cache in between for read which check main server every 10 sec
- Write to main server with a kafka que
