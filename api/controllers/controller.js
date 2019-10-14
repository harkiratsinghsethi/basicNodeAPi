const request = require('request');

module.exports={

    getData: (req, res) => {
        res.status(200).send('test');
    }
};
