const fs = require('fs');

try {
  const fileContents = fs.readFileSync('C:/cert/187C697A9BB.crt', 'utf-8');
  console.log(fileContents);


module.exports = {
  development: {
    app: {
      name: 'testtype',
      port: process.env.PORT || 8080
    },
    passport: {
      strategy: 'saml',
      saml: {
        path:  '/login',
        entryPoint: 'https://ti-intrasso.st.com:9031/idp/SSO.saml2',
        issuer: 'testtype',
        cert: fileContents, 
        signatureAlgorithm: 'rsa sha256' ,
        
      }
    }
  }
}; 

} catch (error) {
  console.error('An error occurred while reading the file:', error);
}
