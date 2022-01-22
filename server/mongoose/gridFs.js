// import { createReadStream } from 'fs';
// import { createModel } from 'mongoose-gridfs';
//
// // use default bucket
// const Attachment = createModel();
//
// // or create custom bucket with custom options
// const Attachment = createModel({
//   modelName: 'Attachment',
//   connection: connection
// });
//
// // write file to gridfs
// const readStream = createReadStream('sample.txt');
// const options = ({ filename: 'sample.txt', contentType: 'text/plain' });
// Attachment.write(options, readStream, (error, file) => {
//   //=> {_id: ..., filename: ..., ...}
// });
//
// // read larger file
// const readStream = Attachment.read({ _id });
//
// // read smaller file
// Attachment.read({ _id }, (error, buffer) => { ... });
//
// // remove file and its content
// Attachment.unlink({ _id }, (error) => { ... });
