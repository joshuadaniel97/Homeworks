const express = require("express")
const bodyParser = require("body-parser")
const {v4: uuid} = require("uuid")

const app = express()
app.use(bodyParser.json())

app.listen(4000, () => {
    console.log("my app is running")
})

const shoppingData = [
    {
        id: uuid(),
        name: "clothes",
        type: "T-shirt M",
        quanity: 3
    },
    {
        id: uuid(),
        name: "clothes",
        type: "socks",
        quanity: 4
    },
    {
        id: uuid(),
        name: "chesse",
        type: "mozerrella",
        quanity: 1
    },
    {
        id: uuid(),
        name: "butter",
        type: "clove",
        quanity: 2
    },
    {
        id: uuid(),
        name: "yoghurt",
        type: "greek-style",
        quanity: 3
    },
    {
        id: uuid(),
        name: "eggs",
        type: "free range",
        quanity: 6
    },
    {
        id: uuid(),
        name: "vegetable",
        type: "carrots",
        quanity: 4
    },
    {
        id: uuid(),
        name: "vegetable",
        type: "broccoli",
        quanity: 2
    },
    {
        id: uuid(),
        name: "fruit",
        type: "banana",
        quanity: 5
    },
    {
        id: uuid(),
        name: "fruit",
        type: "apple",
        quanity: 6
    },
    {
        id: uuid(),
        name: "juice",
        type: "apple",
        quanity: 2
    },
    {
        id: uuid(),
        name: "juice",
        type: "orange",
        quanity: 3
    },
    {
        id: uuid(),
        name: "medicine",
        type: "paracetamol",
        quanity: 1
    },
    {
        id: uuid(),
        name: "medicine",
        type: "ibuprofen",
        quanity: 1
    },
    {
        id: uuid(),
        name: "medicine",
        type: "vitamin C",
        quanity: 1
    }
]


// get information about the shopping list
app.get("/shopping/listofshopping", (req,res) => {
    res.send(shoppingData)
})

app.get("/shopping/order/:id", (req, res) => {
    let orderId = req.params.id
    const specificOrder = shoppingList.find((order) => order.id === orderId)
    console.log(specificOrder)
    res.send(specificOrder)
})

app.get("/shopping/item", (req, res) => {
    res.send(shoppingList)
})

let shoppingList = []


app.post("/shopping/list", (req, res) => {
    const data = req.body;
    shoppingList.push({...data, id: uuid() })
    res.send(shoppingList)
})

app.patch("/shopping/listUpdated/:id", (req, res) => {
    let customerId = req.params.id
    const {type} = req.body;
    const shoppingUser = shoppingList.find((customer) => customer.id === customerId);

    if(type){
        shoppingUser.type = type;
    }
    console.log(shoppingUser)
    res.send("type has been updated")
})

app.get("/shopping/newPatch/:id", (req, res) => {
    let newPatchId = req.params.id
    const specificNewItem = shoppingList.find((patch) => patch.id === newPatchId)
    console.log(specificNewItem)
    res.send(specificNewItem)
})

app.put("/shopping/update/:id", (req, res) => {
    let updatedId = req.body
    const updatedItem = shoppingList.find((update) => update.id === updatedId)
    console.log(updatedId)
    res.send(updatedId)
    res.send("you have updated the type")
})