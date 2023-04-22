const mongoDB = [
  {
    id: "1",
    question: "What is MongoDB and why would you use it?",
    answer:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It provides horizontal scalability, high performance, and supports complex data types, making it suitable for large-scale applications and diverse data storage needs.",
  },
  {
    id: "2",
    question: "What are the key features of MongoDB?",
    answer:
      "Key features include a document-based data model, flexible schema, horizontal scaling, high performance, indexing, rich query language, and support for replication and high availability.",
  },
  {
    id: "3",
    question:
      "What is the difference between a relational database and a NoSQL database like MongoDB?",
    answer:
      "Relational databases store data in tables with a fixed schema and use SQL, while NoSQL databases like MongoDB have flexible schema and store data in various formats, such as document, key-value, column-family, or graph.",
  },
  {
    id: "4",
    question: "What is a MongoDB document and how is it structured?",
    answer:
      "A MongoDB document is a JSON-like data structure called BSON. It consists of field-value pairs, supports complex data types, and can store hierarchical data using embedded documents or arrays.",
  },
  {
    id: "5",
    question: "What is a MongoDB collection?",
    answer:
      "A collection in MongoDB is a group of related documents. It is analogous to a table in relational databases, but does not enforce a fixed schema, allowing for more flexible data storage.",
  },
  {
    id: "6",
    question: "How does indexing work in MongoDB?",
    answer:
      "Indexes in MongoDB improve query performance by allowing the database to efficiently locate documents that match a specific query. Indexes can be created on one or multiple fields and support various index types, such as single-field, compound, or text.",
  },
  {
    id: "7",
    question: "What is the MongoDB aggregation framework?",
    answer:
      "The MongoDB aggregation framework is a pipeline-based system for performing complex data manipulation and analysis on documents in a collection. It uses stages to transform, filter, sort, and group data.",
  },
  {
    id: "8",
    question: "What are some common MongoDB query operators?",
    answer:
      "Common MongoDB query operators include comparison operators like $eq, $ne, $gt, $gte, $lt, and $lte; logical operators like $and, $or, $not, and $nor; and array operators like $in, $nin, $all, $elemMatch, and $size.",
  },
  {
    id: "9",
    question: "What is MongoDB replication and why is it important?",
    answer:
      "Replication is the process of synchronizing data across multiple servers to provide redundancy and high availability. In MongoDB, replication is achieved using replica sets, which consist of a primary node and multiple secondary nodes.",
  },
  {
    id: "10",
    question: "What is a MongoDB replica set?",
    answer:
      "A replica set is a group of MongoDB instances that maintain the same data set. It consists of a primary node and one or more secondary nodes. The primary node receives all write operations, while the secondary nodes replicate data from the primary node for high availability and data redundancy.",
  },
  {
    id: "11",
    question: "What is sharding in MongoDB?",
    answer:
      "Sharding is a method of horizontal scaling that distributes data across multiple MongoDB instances. It splits large data sets into smaller chunks called shards, which are distributed across multiple shard servers, improving read and write performance for large-scale applications.",
  },
  {
    id: "12",
    question:
      "What is the difference between embedding documents and referencing documents in MongoDB?",
    answer:
      "Embedding documents involves storing related data in a single document using sub-documents or arrays. Referencing involves storing related data in separate documents and linking them using a reference field containing the unique identifier (_id) of the related document. Embedding is suitable for small, closely-related data, while referencing is better for large, loosely-related data.",
  },
  {
    id: "13",
    question: "What is the role of the _id field in MongoDB?",
    answer:
      "The _id field in MongoDB is a unique identifier for each document within a collection. It is automatically generated if not explicitly provided and is of the ObjectId data type, which is a 12-byte identifier. The _id field is also used to create an index for fast document retrieval.",
  },
  {
    id: "14",
    question: "How do you update a document in MongoDB?",
    answer:
      "To update a document in MongoDB, use the updateOne(), updateMany(), or findOneAndUpdate() methods with an update operator, such as $set, $inc, $push, or $pull. These methods modify the existing document(s) based on the provided filter criteria and update instructions.",
  },
  {
    id: "15",
    question: "How do you delete a document in MongoDB?",
    answer:
      "To delete a document in MongoDB, use the deleteOne(), deleteMany(), or findOneAndDelete() methods with a filter specifying the document(s) to remove. These methods delete the document(s) that match the provided filter criteria.",
  },
  {
    id: "16",
    question: "What are some data types supported by MongoDB?",
    answer:
      "MongoDB supports various data types, including String, Number (int, long, double, decimal), Boolean, Date, ObjectId, Array, Object, Null, Binary Data, Code, and Regular Expression.",
  },
  {
    id: "17",
    question: "What is the MongoDB findOne() method and how does it work?",
    answer:
      "The findOne() method is used to retrieve a single document from a MongoDB collection based on a specified filter. If multiple documents match the filter criteria, the method returns the first document found. If no document matches the filter, it returns null.",
  },
  {
    id: "18",
    question: "What is the difference between MongoDB and Redis?",
    answer:
      "MongoDB is a document-based NoSQL database, while Redis is an in-memory key-value store. MongoDB is designed for flexible and scalable data storage, while Redis is optimized for high-performance caching, real-time analytics, and message queuing.",
  },
  {
    id: "19",
    question: "What is a capped collection in MongoDB?",
    answer:
      "A capped collection is a fixed-size collection in MongoDB that automatically removes the oldest documents when the specified size or document limit is reached. It is useful for storing data with size constraints, like logs or real-time analytics data.",
  },
  {
    id: "20",
    question: "What is GridFS in MongoDB?",
    answer:
      "GridFS is a specification for storing and retrieving large files, such as images, audio, or video, in MongoDB. It divides a file into smaller chunks and stores them as separate documents, allowing for efficient storage and retrieval of large files without exceeding the BSON document size limit.",
  },
  {
    id: "21",
    question:
      "What are some common MongoDB performance issues and how can they be addressed?",
    answer:
      "Common performance issues include slow queries, missing or inefficient indexes, and excessive memory usage. To address these issues, analyze query performance using the explain() method, create appropriate indexes, monitor memory usage, and optimize queries and data modeling strategies.",
  },
  {
    id: "22",
    question:
      "What is the difference between the $lookup and $graphLookup operators in MongoDB?",
    answer:
      "$lookup performs a left outer join between two collections on a specified field, while $graphLookup performs a recursive search on a collection to retrieve related documents based on a specified relationship. $lookup is suitable for simple joins, while $graphLookup is useful for traversing hierarchical data or complex relationships.",
  },
  {
    id: "23",
    question: "What are some use cases for MongoDB?",
    answer:
      "MongoDB is suitable for a wide range of applications, such as content management systems, e-commerce platforms, social networks, IoT data storage, real-time analytics, logging and event storage, mobile app backends, and geospatial data storage and processing.",
  },
  {
    id: "24",
    question: "What is the oplog in MongoDB?",
    answer:
      "The oplog (operation log) is a capped collection that stores a record of all write operations in a MongoDB replica set. It is used by secondary nodes to replicate data from the primary node and ensure consistency across the replica set. The oplog also enables features like change streams and point-in-time recovery.",
  },
];
export default mongoDB;
