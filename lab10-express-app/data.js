const { MongoClient } = require('mongodb');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("db_it");
    const coll = database.collection("products");
    
    // Create a document to insert
    const doc = [
        {
            type: "cpu",
            id: "100001",
            name: "Intel Core 17 Gen 10th",
            detail: "The Intel Core i7-10750H is a high-end processor for laptops with six cores based on the Comet Lake architecture",
            quantity: 10,
            price: 10,
            file: "testfile",
            img: "https://img.pic.in.th/morty.th.png"
        },

        {
            type: "CPU",
            id: "100002",
            name: "test",
            detail: "asdasd",
            quantity: 1,
            price: 1,
            file: "testfile",
            img: "https://img.pic.in.th/morty.th.png"
        },

        {
            type: "CPU",
            id: "100003",
            name: "test2",
            detail: "test2",
            quantity: 10,
            price: 10,
            file: "testfile",
            img: "https://img.pic.in.th/morty.th.png"
        }
    ];
    // Insert the defined document into the "haiku" collection
    const result = await coll.insertMany(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);