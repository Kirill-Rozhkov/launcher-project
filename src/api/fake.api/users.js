const users = [
    {
        id: 1,
        name: "Jhon",
        email: "jhon111@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 2,
        name: "Atom20",
        email: "Atom222gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 3,
        name: "Dream",
        email: "Dream333@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 4,
        name: "User228",
        email: "User444@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 5,
        name: "N00B",
        email: "Noob555@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 6,
        name: "Big_Boss",
        email: "Boss666@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 7,
        name: "winer",
        email: "Winer777@gmail.com",
        password: "123456789",
        friends: []
    },
    {
        id: 8,
        name: "loser",
        email: "Loser888@gmail.com",
        password: "123456789",
        friends: []
    }
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users)
        }, 2000)
    })

export default {
    fetchAll
}
