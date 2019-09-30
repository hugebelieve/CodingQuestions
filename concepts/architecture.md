## Single point of truth

https://eng.uber.com/
https://blog.twitter.com/engineering/
Sequence Diagram

# Types of architectures
- Micro services architectures (setup own server cluster)
> Popular - (small independent loosely coupled services)
- Service Oriented architectures (use database a service like Firestore)
- Monolithic architectures (everything in one place/system)

# Transaction importance
- All or none (rollback on error)
- Write ahead Lock(WAL)[lock on target rows only] while doing transaction (concurrency solved with isolation)

# Distributed Transactions
- Allows transactions even in micro service architecture

# Two phase commit (Distributed Transactions)
- Consider 2 service "Wallet" and "Order"
- Prepare => Commit
- Coordinator takes control
- Coordinator makes a transaction ID
- Coordinator will Prepare and take locks from both Wallet and Order against the transaction ID
- While prepare we can check values as well to stop transaction before hand (like wallet is empty)
- Once received from both then it can commit in sequence Wallet=>Order
- Incase of error rollback and then only lose both locks
- Coordinator should have a timeout if prepare callback doesn't come back
> Disadvantages
- What if coordinator fail
- http connection of coordinator making http connection
- Database help up
- Latency in system

# Three phase commit (over two phase commit)
- Can Commit => Pre Commit => Do Commit
- Any one of the participant DB service can act as coordinator
- In case of coordinator failure any other participant can as a new coordinator
- New coordinator can ask all participant the last state of theirs to understand how to proceed next

# Saga (Distributed Transactions)
- Asynchronous unlike previous
- Order Placed => (Order Service[with local transaction]) => [Que service/ Event Bus] => 
- (Wallet Service) => [Que of (error/success)] => (Rollback Service/ Success Service)

# Product API
- Product API fan out to Core APIs

# Varnish
- API request collapsing when there is a stampede on initial millisecond  before any caching 

# Component Driven Framework
(Components - a self-contained implementation of a piece of app UI)
(Development becomes an act of composition, rather than constantly reinventing)
(E.g. giving a button too many props of color and background defeats the whole purpose)
(Component should be followed by designer along with developers)

# Types of Locks
- Pessimistic Lock => DB => If more concurrency
> Dead Lock in pessimistic is dangerous as two locks are waiting for each other
> - 
Make sure you have timeout of locks
- Optimistic Lock (Versioning) (not actual lock) => Wikipedia [takes time] /  GIT => If few concurrency
> In Optimistic
- While reading take timestamp of row or just have  a version number column
- Do write operation outside
- Then while writing go back to DB and check if version number match
- If yes update the row and also increment version number
- If not don't do anything as some other query has already did some update so we need to restart transaction

- StyleSheet Theme - component use as single piece of truth
(twitter color mode dark, light)
(style is also an HTML DOM element and can be inserted an removed)


- Action by user
(closing of dropdown for desktop is outside click)
(in phone same item click)

- ModalRoute component
(modal in wide screen but full screen page in mobile)
(component decide based in the device screen)

- LazyLoader
(Don't want to take all code directly to front end)
(LazyLoad as per the need and device spec)
(Twitter has side bar in desktop but for mobile with lazy loading hence code can be skipped)


