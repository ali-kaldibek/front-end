const userProfile = {
    name: 'Bogdan',
    commentQty: 23,
    hasSignedAgreement: false,
};

const userInfo = ({ name }) => (name); 
console.log(userInfo(userProfile));
// userInfo(userProfile);

// console.log(userInfo)