const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const morgan = require('morgan');
var cors = require('cors');
const app = express();
app.use(morgan('combined'));
const path = require ('path');
const expressFileUpload = require('express-fileupload')
// app.use(cors());
// app.options('*', cors());


// const corsOptions = {
//     allowedHeaders: [
//       "Origin",
//       "X-Requested-With",
//       "Content-Type",
//       "Accept",
//       "X-Access-Token",
//       "Authorization",
//     ],
//     credentials: true,
//     methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
//     origin: ["http://localhost:3001", "http://localhost:3000"],
//     preflightContinue: false,
//   };
  
//   app.use(cors(corsOptions));
app.use(cors({
    origin: 'http://localhost:3000', // Thay đổi thành giao diện người dùng của bạn
    credentials: true,
  }));

const port = process.env.PORT;
const userRoute = require('./api/routes/authentication/userRoute');
const roleRoute = require('./api/routes/authentication/roleRoute');
const actionRoute = require('./api/routes/authentication/actionRoute');
const roleActionRoute = require('./api/routes/authentication/roleActionRoute');

const bannerRoute = require('./api/routes/bannerRoute');
const contactRoute = require('./api/routes/contactRoute');
const contactTypeRoute = require('./api/routes/contactTypeRoute');
const domainRoute = require('./api/routes/domainRoute');
const logoRoute = require('./api/routes/LogoRouter');
const noteRoute = require('./api/routes/noteRouter');
const footerRoute = require('./api/routes/footerRouter');
const postRoute = require('./api/routes/postRouter');
const MenuJunRoute = require('./api/routes/menuJun41Router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressFileUpload())
app.use(express.static(path.join(__dirname, `public`)))


//import routes
app.use('/api/user', userRoute);
app.use('/api/role', roleRoute);
app.use('/api/action', actionRoute);
app.use('/api/roleaction', roleActionRoute);

app.use('/api/domain', domainRoute);
app.use('/api/banner', bannerRoute);
app.use('/api/contact', contactRoute);
app.use('/api/contactType', contactTypeRoute);
app.use('/api/logo', logoRoute);
app.use('/api/note', noteRoute);
app.use('/api/footer', footerRoute);
app.use('/api/post', postRoute);
app.use('/api/menu-jun', MenuJunRoute);

app.listen(port, (req, res) => {
    console.log('server listening on port ' + port);
});