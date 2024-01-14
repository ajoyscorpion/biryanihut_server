exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    // Replace this with your actual authentication logic
    if (username === 'ajoy' && password === 'ajoy') {
      res.json({ token: 'yourAuthToken' });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
};