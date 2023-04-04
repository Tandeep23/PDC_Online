const { generateOTP, fast2sms } = require('../services/otp');
const User = require('../models/User');

// const { encrypt, compare } = require('../services/crypto');

/**
 *--------------------- create new user ---------------------------------
 */
exports.createNewUser = async (req, res, next) => {
    try {
        let { phone } = req.body;
        // check duplicate phone Number
        const phoneExist = await User.findOne({ phone });

        if (phoneExist) {
            next({ status: 400, message: "PHONE_ALREADY_EXISTS_ERR" });
            return;
        }


        // create new user
        const createUser = new User({
            phoneNumber: phone
        });

        // save user

        const user = await createUser.save();

        res.status(200).json({
            type: "success",
            message: "Account created OTP sended to mobile number",
            data: {
                userId: user._id,
            },
        });

        // generate otp
        // const otp = generateOTP(6);
        // save otp to user collection
        user.otp = 123456;
        await user.save();
        // send otp to phone number
        // await fast2sms(
        //   {
        //     message: `Your OTP is ${otp}`,
        //     contactNumber: user.phone,
        //   },
        //   next
        // );
    } catch (error) {
        next(error);
    }
};


// ---------------------- verify phone otp -------------------------

exports.verifyPhoneOtp = async (req, res, next) => {
    try {
        const { otp, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            next({ status: 400, message: "USER_NOT_FOUND_ERR" });
            return;
        }

        if (user.otp !== otp) {
            next({ status: 400, message: "INCORRECT_OTP_ERR" });
            return;
        }
        // const token = createJwtToken({ userId: user._id });

        user.otp = "";
        await user.save();

        res.status(201).json({
            type: "success",
            message: "OTP verified successfully",
            data: {
                userId: user._id,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Fetch User Data
 */

exports.fetchCurrentUser = async (req, res, next) => {
    try {
        const { user } = req.body;

        console.log("user : ", user);
        const userData = await User.findById(user);
        console.log("User data :: ", userData);

        res.status(200).json({
            type: "success",
            message: "fetch current user",
            data: {
                user: userData,
            },
        });
    } catch (error) {
        next(error);
    }
};


/**
 * Register using email
 */

exports.registerViaEmail = async (req, res, next) => {
    try {
        console.log("Inside register Vial Email");
        const { name, email, password, phoneNumber } = req.body;


        const phoneExist = await User.findOne({ phoneNumber });


        if (phoneExist) {
            next({ status: 400, message: "PHONE_ALREADY_EXISTS_ERR" });
            return;
        }

        // const hashedPassword = await encrypt(password);

        const createUser = new User({
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            name: name
        });

        // save user

        const user = await createUser.save();

        res.status(200).json({
            type: "success",
            message: "Account created, Proceed to verify account",
            data: user
        });
    } catch (error) {
        next(error);
    }
};


/**
 * Check if EMAil / Phone Number exists
 */

exports.checkIfExists = async (req, res, next) => {
    try {
        console.log("Inside register Vial Email");
        const {tag , value} = req.body;
        
        console.log(tag, '\n' ,value);
        if (tag == "email") {
            let email = value;
            const emailExist = await User.findOne({ email });
            if (emailExist) {
                next({ status: 200, message: "EMAIL_ALREADY_EXISTS_ERR" ,data : true});
                return;
            }
        } else if (tag == "phoneNUmber") {
            const phoneExist = await User.findOne({ value });
            if (phoneExist) {
                next({ status: 200, message: "PHONE_ALREADY_EXISTS_ERR" , data : true});
                return;
            }
        }

        res.status(400).json({
            message: "Record Not Found",
            data : false
        });
    } catch (error) {
        next(error);
    }
};

exports.emailLogin = async (req, res, next) => {
    try {
        console.log("Inside register Vial Email");
        const {email , password} = req.body;         
        let user =  await User.find({
            'email' : email,
            'password' : password
            });
        if(user.length >=1) {
        res.status(200).json({
            user: user,
        });
    } else {
        res.status(400).json({
            message: "user Not Found",
        });
    }
    } catch (error) {
        next(error);
    }
};
