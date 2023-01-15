const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

// Receving the data from the Front End
// Req contains the info what we send from Front End
// Since wait is used in this function, making it async
const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        // Generating a random Id
        const userId = crypto.randomBytes(16).toString('hex');

        // Connection to stream. All these params are gonna be secret so we will be using environmental variables
        // This will be used to create a new User Token
        const serverClient = connect(api_key, api_secret, app_id);

        // encrypting the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        // Sending the data back to the front end
        res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const serverClient = connect(api_key, api_secret, app_id);

        // Creating a new instance of the stream chat for querying all teh records in teh database
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ name: username });

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        // Decrypting the password and seeing if it matches with the one created by the user duing onboarding
        const success = await bcrypt.compare(password, users[0].hashedPassword); //users[0].hashedPassword is th old password created during onboarding

        // Passing the userId from the db
        const token = serverClient.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }
    } catch (error) {ads
        console.log(error);

        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login }