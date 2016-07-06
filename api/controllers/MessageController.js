/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    status: function (req, res) {
        Message.query("INSERT into message(`name`, `message`)VALUES('"+req.param('name')+"','"+req.param('message')+"')",function(err,rows){
if(!err) {
            Message.publishCreate({
                id: rows.insertId,
                name: req.param('name'), message: req.param('message')
            });
        } else {
            sails.log(rows);
        }
    });
},
    subscribe: function(req, res) {
        Message.watch(req);
    },
index: function(req, res) {
    Message.query("SELECT * FROM `message`", function (err, rows) {
        if (err) {
            res.json({ "error": true, "message": "database error" });
        } else {
            res.ok(rows);
        }
    });
}
};
	


