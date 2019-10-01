/* eslint-disable max-len */
/* eslint-disable camelcase */

'use strict';
var server = require('../../server/server');

module.exports = function(StudentCard_ServiceStudentCard_Binding) {
  var soapDataSource = server.datasources.soapDS;
  var _soapModel;

  soapDataSource.once('connected', function() {
    // Create the model
    _soapModel = soapDataSource.createModel('StudentCard_ServiceStudentCard_Binding', {});
  });

  /**
   * Read
   * @param {Read} Read Read
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.Read = function(Read, callback) {
    _soapModel.Read(Read, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * ReadByRecId
   * @param {ReadByRecId} ReadByRecId ReadByRecId
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.ReadByRecId = function(ReadByRecId, callback) {
    _soapModel.ReadByRecId(ReadByRecId, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * ReadMultiple
   * @param {ReadMultiple} ReadMultiple ReadMultiple
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.ReadMultiple = function(ReadMultiple, callback) {
    _soapModel.ReadMultiple(ReadMultiple, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * IsUpdated
   * @param {IsUpdated} IsUpdated IsUpdated
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.IsUpdated = function(IsUpdated, callback) {
    _soapModel.IsUpdated(IsUpdated, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * GetRecIdFromKey
   * @param {GetRecIdFromKey} GetRecIdFromKey GetRecIdFromKey
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.GetRecIdFromKey = function(GetRecIdFromKey, callback) {
    _soapModel.GetRecIdFromKey(GetRecIdFromKey, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * Create
   * @param {Create} Create Create
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.Create = function(Create, callback) {
    _soapModel.Create(Create, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * CreateMultiple
   * @param {CreateMultiple} CreateMultiple CreateMultiple
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.CreateMultiple = function(CreateMultiple, callback) {
    _soapModel.CreateMultiple(CreateMultiple, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * Update
   * @param {Update} Update Update
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.Update = function(Update, callback) {
    _soapModel.Update(Update, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * UpdateMultiple
   * @param {UpdateMultiple} UpdateMultiple UpdateMultiple
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.UpdateMultiple = function(UpdateMultiple, callback) {
    _soapModel.UpdateMultiple(UpdateMultiple, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  /**
   * Delete
   * @param {Delete} Delete Delete
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  StudentCard_ServiceStudentCard_Binding.Delete = function(Delete, callback) {
    _soapModel.Delete(Delete, function(err, response) {
      var result = response;
      callback(err, result);
    });
  };

  // Map to REST/HTTP

  StudentCard_ServiceStudentCard_Binding.remoteMethod('Read',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'Read',
        type: 'Read',
        description: 'Read',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'Read_Result',
        description: 'Read_Result',
        root: true}],
      http: {verb: 'post', path: '/Read'},
      description: 'Read'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('ReadByRecId',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'ReadByRecId',
        type: 'ReadByRecId',
        description: 'ReadByRecId',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'ReadByRecId_Result',
        description: 'ReadByRecId_Result',
        root: true}],
      http: {verb: 'post', path: '/ReadByRecId'},
      description: 'ReadByRecId'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('ReadMultiple',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'ReadMultiple',
        type: 'ReadMultiple',
        description: 'ReadMultiple',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'ReadMultiple_Result',
        description: 'ReadMultiple_Result',
        root: true}],
      http: {verb: 'post', path: '/ReadMultiple'},
      description: 'ReadMultiple'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('IsUpdated',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'IsUpdated',
        type: 'IsUpdated',
        description: 'IsUpdated',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'IsUpdated_Result',
        description: 'IsUpdated_Result',
        root: true}],
      http: {verb: 'post', path: '/IsUpdated'},
      description: 'IsUpdated'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('GetRecIdFromKey',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'GetRecIdFromKey',
        type: 'GetRecIdFromKey',
        description: 'GetRecIdFromKey',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'GetRecIdFromKey_Result',
        description: 'GetRecIdFromKey_Result',
        root: true}],
      http: {verb: 'post', path: '/GetRecIdFromKey'},
      description: 'GetRecIdFromKey'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('Create',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'Create',
        type: 'Create',
        description: 'Create',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'Create_Result',
        description: 'Create_Result',
        root: true}],
      http: {verb: 'post', path: '/Create'},
      description: 'Create'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('CreateMultiple',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'CreateMultiple',
        type: 'CreateMultiple',
        description: 'CreateMultiple',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'CreateMultiple_Result',
        description: 'CreateMultiple_Result',
        root: true}],
      http: {verb: 'post', path: '/CreateMultiple'},
      description: 'CreateMultiple'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('Update',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'Update',
        type: 'Update',
        description: 'Update',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'Update_Result',
        description: 'Update_Result',
        root: true}],
      http: {verb: 'post', path: '/Update'},
      description: 'Update'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('UpdateMultiple',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'UpdateMultiple',
        type: 'UpdateMultiple',
        description: 'UpdateMultiple',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'UpdateMultiple_Result',
        description: 'UpdateMultiple_Result',
        root: true}],
      http: {verb: 'post', path: '/UpdateMultiple'},
      description: 'UpdateMultiple'}
  );

  StudentCard_ServiceStudentCard_Binding.remoteMethod('Delete',
    {isStatic: true,
      produces:
      [{produces: 'application/json'},
     {produces: 'application/xml'}],
      accepts:
      [{arg: 'Delete',
        type: 'Delete',
        description: 'Delete',
        required: true,
        http: {source: 'body'}}],
      returns:
      [{arg: 'data',
        type: 'Delete_Result',
        description: 'Delete_Result',
        root: true}],
      http: {verb: 'post', path: '/Delete'},
      description: 'Delete'}
  );
};
