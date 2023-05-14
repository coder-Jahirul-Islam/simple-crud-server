/**
 * ----------------
 * MongoDb Connection
 * ----------------
 * 
 * 1.Create account
 * 2.Create an user with password
 * 3.Whitelist IP address
 * 4.Database > connect > driver > Node > View full code 
 * 5.Changed the password in the uri 
 * -------------------------------------
 * 
 * 1.CREATE ---POST
 * 2.app.post('/users'/, async (req, res) =>{})
 * 3.Make the function async to use await inside it 
 * 4.Make sure use the express.json() middleware
 * 5.Access data from the body: const user = req.body
 * 6.Const result = await userCollection.insertOne(user);
 * 7.res.send(result)
 * 
 * 
 * ---------------------------------
 * CLIENT 
 * 1.Create fetch
 * 2.Add second parameter as an object 
 * 3.Provider method:   
 * 4.Add headers:{'content-type':'application/json'}
 * 5.Add body; JSON.stringify(user)
 * 
 *
 * 
 * 
 * 
 * 
 * ----------------------------
 *  READ MANY
 * 1. Create a cursor = userCollection.find()
 * 2. Const result = await cursor.toArray()
 *  
 * -------------------------
 * DELETE
 * -------------------------
 * 1.Create app.delete('/user/:id', async(res, res)=>{})
 * 2.Specify unique ObjectId to delete the right user 
 * 3.Const query = {_id: new ObjectId(id)}
 * 4.const result = await userCollection.deleteOne(query);
 * 
 * 
 * ClIENT
 * 1.Create dynamic url with id 
 * 2.Mention the DELETE method  
 *  
 * */ 


