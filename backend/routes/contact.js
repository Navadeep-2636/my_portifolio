const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // Insert into Supabase contacts table
        const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);

        if (error) {
            console.error('Supabase insert error:', error);
            return res.status(500).json({ error: 'Failed to submit message to database' });
        }

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Server error while submitting form' });
    }
});

module.exports = router;
