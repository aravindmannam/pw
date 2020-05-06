 var push=require('web-push');
 let vapdKeys={
    publicKey:'BA1ZbV00nlYC-0n_vAnIY5vEhDL1NTRl3LFo82YAqpJ9HGdgmwLkoOhiTebZ79TJezNkzsQh3xEufCanJDJzURo',
    privateKey: 'XbfzcO1n_nwFPZ8NniVnd2Fbj1Usd-I62yVkBOoDU5s'
}

push.setVapidDetails('mailto:aravindmannam24@gmail.com',vapdKeys.publicKey,vapdKeys.privateKey)

let sub={}

push.sendNotification(sub, 'text message')