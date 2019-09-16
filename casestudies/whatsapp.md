# Messaging
> TCP connection with server
> When connected create a process(light weight thread) for that user
> That process handles a que associated to that process/thread
> Also keep a process ID map in table along side user uid
> If user A send message to user B
> Message is passed to process que of user B by process thread of user A
> If user B is offline its process thread will be absent
> So message goes to Late message DB
> When process thread for user B is created on user B connection
> User B thread will read from Late message DB and will send to user B

# Last Seen
> Heart beat is send to server by connected user
> And epoch time is save in DB against that user

# Media Handle
> Use HTTP and pass the media to CDN first and get an hash key
> Then pass only the hash key to client B
> Also media type is send along with has key

# Encryption
> Symmetric Encryption - Both parties uses same key to encrypt and decrypt
> Asymmetric Encryption - Public and private key, public key is shared of a given user

# VOIP server - Telephony