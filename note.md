CRUD => CREATE READ UPDATE DELETE
/ => read all the note/tasks

/ => create (post) => create a note/tasks

/:uniqueId => read (get) =>  send the note related to this uniqueId

/:uniqueId => update (post/put/patch) =>  update the note related to this uniqueId

/:uniqueId => delete (delete) =>  delete the note related to this uniqueId

react 

axios.post()
fetch.post()

<form onSubmit={submitForm}></form>
<form action="index.js"></form>

HTTP Request Methods

GET: Used to retrieve data from the server. This method is the most commonly used HTTP method and is typically used to fetch information from a server withou modifying any data.

POST: Used to send data to the server. This method is typically used to submit information or to cretae a new record to the server.

PUT: Use to update data on the server. This method is used to update an existing resource on the server.

PATCH: Same like put but to update partically.

DELETE: Used to delte data on the server. This method is used to remove a resource form the server.

Put vs Patch

The HTTP PUT and PATCH methods are both used to update resources on a server, but they have different meanings and uses.

