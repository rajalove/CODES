const bcrypt=require('bcryptjs');
const gravatar=require('gravatar');
const uuid=require('uuid');


//user details.....

let user={
    name:'rajasekhar',
    age:26,
    gmail:'rajasekhar6876@gmail.com',
    password:'raja12345@2345',

}

// console.log(user);

const salt=bcrypt.genSaltSync(10);
const hashPassword=bcrypt.hashSync(user.password,salt);
// console.log(hashPassword);



//gravatar image............................
const image=gravatar.url(user.gmail,{
    s:'200',
    r:'pg',
    d:'mm',

})

let updatedDetails={
    id:uuid.v4(),
    ...user,
    password:hashPassword,
    image:image,
}
console.log(updatedDetails);


const isMatch=bcrypt.compareSync('raja12345@2345',hashPassword)
if(isMatch)
{
    console.log('password is correct')
}
else{
    console.log('invalid password');
}
