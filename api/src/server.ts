import app from './app';

const PORT = parseInt(process.env.PORT, 10) || 8080;

app.listen(PORT, 'localhost', () => {
  console.log('Express server listening on port ' + PORT);
});
