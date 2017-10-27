module.exports = {
  servers: {
    one: {
      host: '192.168.1.220',
      username: 'root',
      // pem: './path/to/pem'
      password: 'vagrantrootdeploy'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    name: 'meteor-test-app',
    path: '../../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // port for meteor app
      PORT: 3000,

      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://192.168.1.220',
      MONGO_URL: 'mongodb://localhost/meteor',
//      ROOT_URL: 'http://app.com',
//      MONGO_URL: 'mongodb://localhost/meteor',
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma separated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'kadirahq/meteord' if your app is using Meteor 1.3 or older
      image: 'abernix/meteord:base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
