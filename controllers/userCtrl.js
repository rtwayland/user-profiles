var users = [{
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login(req, res) {
        var found = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name.toLowerCase() === req.body.name.toLowerCase()) {
                if (req.body.password === users[i].password) {
                    req.session.currentUser = users[i];
                    found = true;
                    break;
                }
            }
        }

        let obj = {
            userFound: found
        };

        res.status(200).json(obj);
    }
}
