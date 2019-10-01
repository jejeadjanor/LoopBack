'use strict';

module.exports = function(Studentcard) {
// // External PeriodTable WebService operation exposed as REST APIs through LoopBack
//   Studentcard.Create = function(elementName, cb) {
//     Studentcard.Create({StudentCard: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.Read = function(elementName, cb) {
//     Studentcard.Read({Id: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.ReadByRecId = function(elementName, cb) {
//     Studentcard.ReadByRecId({recId: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.ReadMultiple = function(elementName, cb) {
//     Studentcard.ReadMultiple({filter: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.IsUpdated = function(elementName, cb) {
//     Studentcard.IsUpdated({Key: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.GetRecIdFromKey = function(elementName, cb) {
//     Studentcard.GetRecIdFromKey({Key: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.CreateMultiple = function(elementName, cb) {
//     // eslint-disable-next-line camelcase
//     Studentcard.CreateMultiple({StudentCard_List: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.Update = function(elementName, cb) {
//     Studentcard.Update({StudentCard: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.UpdateMultiple = function(elementName, cb) {
//     Studentcard.UpdateMultiple({StudentCard: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//   Studentcard.Delete = function(elementName, cb) {
//     Studentcard.Delete({Key: elementName},
//     function(err, response) {
//       var result = response;
//       cb(err, result);
//     });
//   };

//    // Map to REST/HTTP
//   Studentcard.remoteMethod(
//     'Create', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'post', path: '/studentcard:Create'},
//     }
// );

//   Studentcard.remoteMethod(
//     'Read', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'get', path: '/studentcard:Read'},
//     }
// );

//   Studentcard.remoteMethod(
//     'ReadByRecId', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:ReadByRecId'},
//     }
// );

//   Studentcard.remoteMethod(
//     'ReadMultiple', {
//       accepts: [
//         {arg: 'elementName', type: 'StudentCard_Filter', required: true,
//           arg: 'bookmarkKey', type: 'string', required: true,
//           arg: 'setSize', type: 'int', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:ReadMultiple'},
//     }
// );

//   Studentcard.remoteMethod(
//     'IsUpdated', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:IsUpdated'},
//     }
// );

//   Studentcard.remoteMethod(
//     'GetRecIdFromKey', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:GetRecIdFromKey'},
//     }
// );

//   Studentcard.remoteMethod(
//     'CreateMultiple', {
//       accepts: [
//         {arg: 'elementName', type: 'StudentCard_List', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:CreateMultiple'},
//     }
// );

//   Studentcard.remoteMethod(
//     'Update', {
//       accepts: [
//         {arg: 'elementName', type: 'StudentCard', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:Update'},
//     }
// );

//   Studentcard.remoteMethod(
//     'UpdateMultiple', {
//       accepts: [
//         {arg: 'elementName', type: 'StudentCard', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:UpdateMultiple'},
//     }
// );

//   Studentcard.remoteMethod(
//     'Delete', {
//       accepts: [
//         {arg: 'elementName', type: 'string', required: true,
//           http: {source: 'query'}},
//       ],
//       returns: {arg: 'result', type: 'object', root: true},
//       http: {verb: 'delete', path: '/studentcard:Delete'},
//     }
// );
};
