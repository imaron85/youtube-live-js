import {google} from "googleapis";

const oauth2Client = new google.auth.OAuth2({clientId: ""});

google.options({auth: oauth2Client});



google.youtube("v3").liveChatMessages.list({liveChatId: "googleapis", part: ["snippet"]});