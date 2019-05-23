const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', async (req, res) => {
      return app.render(req, res, '/');
    });

    server.get('/about', async (req, res) => {
      return app.render(req, res, '/about');
    });

    server.get('/:name', async (req, res) => {
      return app.render(req, res, '/name', { name: req.params.name });
    });

    // server.get('/:slug', (req, res) => {
    //   return app.render(req, res, '/movie', { slug: req.params.slug });
    // });

    // server.get('/about', async (req, res) => {
    //   return app.render(req, res, '/about');
    // });

    // server.get('/:slug', (req, res) => {
    //   return app.render(req, res, '/movie', { slug: req.params.slug });
    // });

    // server.get('/:slug/play', (req, res) => {
    //   return app.render(req, res, '/play', { slug: req.params.slug });
    // });

    // For all other routes, use next.js.
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });