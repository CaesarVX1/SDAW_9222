const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

// Mapa básico de tipos MIME
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4'
};

function send404(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('404 - Not Found');
}

function requestHandler(req, res) {
    try {
        let reqPath = decodeURIComponent(new URL(req.url, `http://localhost`).pathname);
        if (reqPath === '/') reqPath = '/index.html';
        const filePath = path.join(__dirname, reqPath);

        if (!filePath.startsWith(path.join(__dirname, path.sep))) {
            send404(res);
            return;
        }

        fs.stat(filePath, (err, stats) => {
            if (err || !stats.isFile()) {
                send404(res);
                return;
            }

            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);

            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
            stream.on('error', () => send404(res));
        });
    } catch (e) {
        console.error('Server error:', e);
        res.statusCode = 500;
        res.end('500 - Server error');
    }
}

const PRIMARY_PORT = 3000;
const FALLBACK_PORT = process.env.PORT || 8080;

function tryListen(port, isFallback = false) {
    const server = http.createServer(requestHandler);

    server.on('error', (err) => {
        if (err && (err.code === 'EADDRINUSE' || err.code === 'EACCES')) {
            console.warn(`Puerto ${port} no disponible (${err.code}).`);
            if (!isFallback) {
                console.log(`Intentando puerto alternativo ${FALLBACK_PORT}...`);
                tryListen(FALLBACK_PORT, true);
                return;
            }
        }
        console.error('Error del servidor:', err);
        process.exit(1);
    });

    server.listen(port, '0.0.0.0', () => {
        console.log(`Servidor estático escuchando en http://localhost:${port}`);
    });

    // Mantener el proceso vivo en entornos donde listen no lo haga por alguna razón
    setInterval(() => {}, 24 * 60 * 60 * 1000);
}

// Empezar intentando el puerto 3000
tryListen(PRIMARY_PORT);

process.on('uncaughtException', (err) => {
    console.error('uncaughtException:', err);
});
process.on('unhandledRejection', (reason) => {
    console.error('unhandledRejection:', reason);
});

// Mantener el proceso vivo en entornos donde el server.listen
// no mantenga la ejecución por alguna razón; interval muy largo.
setInterval(() => {}, 24 * 60 * 60 * 1000);