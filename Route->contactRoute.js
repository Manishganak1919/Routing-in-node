const express = require('express');
const router = express.Router();

const {getContact, createContact,anotherContact,updateContact,deleteContact} = require('../../controllers/contactController');
/**this is used for get request */
router.route('/').get(getContact);

/***This is used for post request */
router.route('/contacts').post(createContact);

router.route('/:id').get(anotherContact);
/***This is used for update details */
router.route('/contacts').put(updateContact);

// Delete a contact by ID
router.route('/:id').delete(deleteContact);

module.exports = router;
