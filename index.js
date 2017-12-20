const blockchain = require('./blockchain');

blockchain.initBlockchain();
blockchain.addNewBlock('first new block');
blockchain.addNewBlock('Another one!!!');
blockchain.addNewBlock('More hashes plz)');

console.log(blockchain.getAllBlocks());