var profiles = [{
        name: 'Preston McNeil',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {
    get() {
        var friends = [];
        for (var i = 0; i < req.session.currentUser.friends.length; i++) {
            friends = profiles.filter((value) => value.name.toLowerCase() === req.session.currentUser.friends[i].toLowerCase());
        }
        let obj = {
            currentUser: req.session.currentUser,
            friends: friends
        };

        res.status(200).json(obj);
    }
}
