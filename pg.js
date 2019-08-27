const {Client, Pool} = require('pg')
const client = new Client({
    database: 'd14uehlmob7ne4',
    host: 'ec2-54-221-214-3.compute-1.amazonaws.com',
    user: 'hxqatomyuhhglt',
    password: '1a2774472077623f778d49f03b1da32b42d92ad0ffcb34dae7ef316952415697',
    port: 5433
})

client.connect()

module.exports = client
