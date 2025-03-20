const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // Simple response logic based on user input
  let botReply = 'I am not sure how to respond to that.';

  if (userMessage.toLowerCase().includes('hello')) {
    botReply = 'Hello! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('how are you')) {
    botReply = 'I am just a bot, but I am doing well. Thank you for asking!';
  }

  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
