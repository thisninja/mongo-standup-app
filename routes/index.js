var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');
/* GET home page. */
router.get('/', function(req, res) {
  return standupCtrl.list(req, res);
});
/* POST home page to filer list of members */
router.post('/', function(req, res) {
	return standupCtrl.filterByMember(req, res);
});
/* get New note pafe */
router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});
/* post New note pafe */
router.post('/newnote', function(req, res) {
  return standupCtrl.create(req, res);
});


module.exports = router;
