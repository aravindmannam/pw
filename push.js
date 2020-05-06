 var push=require('web-push');
let vapdKeys = {
    publicKey:
        'BLhPynKRNMC-b_23FQERW-D2nYvn6BHCm5ZRibinoA4TmDtyUBcv1Dheo_2Bk68K759mdPTalDz-nRsZw3Q-Csw',
    privateKey: 'TXUopwLk_HO9QSgy9u7DI1Hb_yHiwSFQvg7opB-Pl0Q'
}
push.setVapidDetails('mailto:aravindmannam24@gmail.com',vapdKeys.publicKey,vapdKeys.privateKey)

let sub={}

push.sendNotification(sub, 'test message')