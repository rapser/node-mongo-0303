const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('notas desde la bd');
});

module.exports = router;