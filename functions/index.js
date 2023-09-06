const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Write and deploy the callable function
// https://firebase.google.com/docs/functions/callable
exports.addAdminRole = functions.https.onCall(async (data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`,
      };
    })
    .catch((error) => {
      console.log("Function Error. ", error);
    });
});
