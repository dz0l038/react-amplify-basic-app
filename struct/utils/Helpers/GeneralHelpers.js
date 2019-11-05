import { Auth } from 'aws-amplify';

class GeneralHelpers {
    static checkNested(obj /*, level1, level2, ... levelN*/) {
        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return null;
            }
            obj = obj[args[i]];
        }
        return obj;
    }

    static getCurrentUserSub() {
        return new Promise((resolve, reject) => {
            Auth.currentAuthenticatedUser()
                .then(user => {
                    if (user.attributes.sub) {
                        resolve(user.attributes.sub)
                    } else {
                        console.log(user)
                        resolve(null)
                    }
                })
                .catch(err => {
                    console.log(err)
                    resolve(null)
                });
        })
    }
}

export default GeneralHelpers;