module.exports = {
    async rewrites() {
      return [
        {
          source: '/:route',
          destination: 'http://localhost:3001/:route' // Proxy to Backend
        },

      ]
    }
  }