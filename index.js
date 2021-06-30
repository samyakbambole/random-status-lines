const statusLines = require('./json/status-lines.json'); 

const generate = () => {
     const index = Math.floor(Math.random() * statusLines.length);
     const StatusLine = statusLines[index];

     return StatusLine
}

module.exports = {
     generate
};