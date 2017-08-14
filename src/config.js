function Config() {
  function App() {
    this.port = process.env.PORT || 3000;
  }

  this.app = new App();
};

const config = new Config();


export default config;