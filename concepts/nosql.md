#Types
> Collection Document
> Key value pair
> Graph
> Column oriented - cassandra

## MongoDB

#Feature
> Flexible than SQL as you are not restricted to specific columns
> Fast than traditional DB
> BSON - Binary JSON
> Aggregators - map,reduce

#Namespace
> concat of collection and document name
> Like users.uid

#SQL vs MongoDB
> SQL stores in  a pre-defined data models which is not suitable for highly growing application.
> Constant patched and update to database scheme can be done easily in MongoDB
> Faster because of efficient indexing and storage techniques

#Primary key foreign key
> Cannot achieve directly by can be done inserting address document inside user documents (nesting)

#Lazy writes
> 60 sec write operation to actual disk
> As MongoDB works with Shared Memory(values mapped from disk to Memory)
> So any write operation done(operation query text) is pushed into a journal file
> In failure between 60 sec after reboot that journal operation will be done on shared memory
> So we get persistance

#Indexed
> Helpful for efficient execution of query
> Otherwise mongoDB have to check every document in the collection
> With indexing mongodb can efficiently check specific documents which it has mapped based on given query
> > _id is default indexed in MongoDB
> Indexes are stored in Ram so faster but can bottleneck so only index most required fields only

#Covered Query
> Here all query field should be a part of index
> Also all returning fields should also be a part of index
> _id:0 needed for cover query
> This way mongodb only checks the indexes and none of the documents

#Transaction and locking
> Locking a transaction not directly supported but can be done by nesting of document and keeping it deep

#Aggregation in MongoDB
> Groups the values got from the DB
> map,reduce function
> And commands like JS code/function