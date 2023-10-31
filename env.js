require('dotenv').config()
class Envorment{
    static get (key){
        if(!process){
            throw new Error("process not define ")
        }
        if(!process.env){
            throw new Error("env envorment not define")
        }
        if(!process.env[key]){
            throw new Error("key  not define")
        }
        return process.env[key]

    }
    static Keys = class {
        static MAILCHIMP_KEY ="MAILCHIMP_KEY"
    }

        
    }
    module.exports = {
        Envorment
    }

