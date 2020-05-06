 var push=require('web-push');
let vapdKeys = {
    publicKey:
        'BLhPynKRNMC-b_23FQERW-D2nYvn6BHCm5ZRibinoA4TmDtyUBcv1Dheo_2Bk68K759mdPTalDz-nRsZw3Q-Csw',
    privateKey: 'TXUopwLk_HO9QSgy9u7DI1Hb_yHiwSFQvg7opB-Pl0Q'
}
push.setVapidDetails('mailto:aravindmannam24@gmail.com',vapdKeys.publicKey,vapdKeys.privateKey)

let sub={
    "endpoint": "https://fcm.googleapis.com/fcm/send/fq08nT9Uhyk:APA91bFlYTsrBV_btOPkKTdUmPBuAosYL9k0vYblrS8llMHn1lxukeBru3wO3iitet7YwRD7Dbhqr4dG3IMDUM45VjEOU8BXLGg_6ERq7EvaMC0_MxRyF0fWdEpkxXd00Mtp_7l-x1MK",
     "expirationTime": null, 
     "keys": 
     { "p256dh": "BIs5RyaILUXKcX159MBHZus9jAeUi4Tf_9NV2eIpm8CMAbuDgxmKlL8A7WbEKyk4YQ2gWK8ilLbsDYcF0fOQDes", 
     "auth": "LCHSJDacGfjemlT7129NxA" 
    }
     }


push.sendNotification(sub, 'test message')