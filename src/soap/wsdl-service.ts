import axios from 'axios';

export const wsdlService = {
  WsdlService: {
    HelloPort: {
      HelloSend: function (args) {
        const fullName = args.firstName + ' ' + args.lastName;
        return {
          fullName: fullName,
        };
      },
      PallindromSend: function (args) {
        return new Promise(async (resolve) => {
          const data = {
            text: args.firstName.$value,
          };
          const res = await axios
            .post('http://localhost:3000/palindrome', data)
            .then(function (response) {
              console.log(response);
              return response.data;
             
            })
            .catch(function (error) {
             // console.log(error);
              return 'false';
            });
          resolve({
            result: res,
          });
        });
      },
    },
  },
};
