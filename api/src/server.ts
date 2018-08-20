import app from './app';

const PORT = parseInt(process.env.PORT, 10) || 8081;

app().then(application =>
  application.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
  })
);
