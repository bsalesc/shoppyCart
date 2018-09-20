import app from './app';
import { dbConnect } from './configs/db.connection';

const PORT = parseInt(process.env.PORT, 10) || 8081;

dbConnect()
  .then(async () => {
    const application = await app();
    application.listen(PORT, () => {
      console.log('Express server listening on port ' + PORT);
    });
  })
  .catch(error => console.error(error));
