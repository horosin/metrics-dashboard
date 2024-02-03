require('dotenv').config();
import http from 'http';
import open from 'open';
import { parse as urlParse } from 'url';

// Replace these with your application's details
const client_id = process.env.LINKEDIN_CLIENT_ID;
const client_secret = process.env.LINKEDIN_CLIENT_SECRET;
const redirect_uri = 'http://localhost:3000/callback';

// LinkedIn OAuth URLs
const authUrl = 
    `https://www.linkedin.com/oauth/v2/authorization` +
    `?response_type=code&client_id=${client_id}` +
    `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
    `&scope=profile%20email%20openid%20`;
const tokenUrl = `https://www.linkedin.com/oauth/v2/accessToken`;

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/callback')) {
        const queryObject = urlParse(req.url, true).query;
        const code = queryObject.code;
        
        // Exchange authorization code for access token
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirect_uri,
                client_id: client_id,
                client_secret: client_secret
            })
        });

        const data = await response.json();
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if(data.access_token) {
            res.end(`Access Token: ${data.access_token}<br>Expires In: ${data.expires_in}`);
            console.log(`Access Token: ${data.access_token}`);
            console.log(`Expires In: ${data.expires_in}`);
        } else {
            res.end('No access token received.');
            console.error('No access token received.');
        }
        
        server.close();
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, async () => {
    console.log('Server running on http://localhost:3000');
    await open(authUrl);
});
