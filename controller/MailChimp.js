const client = require("@mailchimp/mailchimp_marketing");
const { Envorment } = require("../env");

class MailChimp {
    constructor(){
        this.client=client
        this.client.setConfig({
            apiKey: Envorment.get(Envorment.Keys.MAILCHIMP_KEY),
            server: "us21",
          });
    }
    
    async createBatchListMembet(data,list_id){
        try {
            
            return await this.client.lists.batchListMembers(list_id, {
                members:data,
              });
        } catch (error) {
            console.log(error)
            return null;
        }
    }
    
}

module.exports={
    MailChimp
}