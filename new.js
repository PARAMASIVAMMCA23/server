app.post('/api/createAccount', (req, res) => {
    const { name, email, password } = req.body;

    // Validate the request body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    // Check if the email is already in use
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email is already in use.' });
    }

    // Create a new user object
    const newUser = {
        name,
        email,
        password
    };

    // Push the new user to the mock database
    users.push(newUser);

    // Respond with a success message
    res.status(201).json({ message: 'Account created successfully.' });
});