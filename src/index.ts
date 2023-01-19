import App from './App';

const app = new App().app;

app.listen('8000', () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `);
});
