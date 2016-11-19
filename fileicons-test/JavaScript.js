module.exports = function (app) {

    return {

        // ALLOW TESLA LOGGING TO BE TURNED OFF IN CONFIG
        log: function(what) {
            if ( app.config.logging.console === true ) console.log(what);
        },

        emptyObject: function(obj) {
          return !Object.keys(obj).length;
        },

        countObject: function(obj) {
            var count = 0;
            for( var key in obj ) {
              if(obj(key)) {
                count++;
              }
            }

            return count;
        },

        throw: function(num) {

            var code = {
                400 : '400 Bad Request',
                401 : '401 Unauthorized',
                403 : '403 Forbidden',
                404 : '404 Not Found',
                405 : '405 Method Not Allowed',
                500 : '500 Internal Server Error',
            };

            var err = new Error( code[num] );
                err.code = num;
                err.message = code[num];
                err.status = num;

            return err;

        }

    };

};


exports.all = function(app) {

    var tesla = require('../../lib/tesla')(app),
    uri = require('../../lib/uri')(app, app.req),
    model = require('../../lib/{uri}')(app),
    options = teslaDB.optionsUri( app.req.query ),

    modal.all( options, function (result) {

        // IF REQEUST IS SUCESS
        if (result.status === 'success') {
            if ( app.config.api.enabled === true && app.config.api.format === 'json') {
                if ( resault.data.length > 0 ) {
                    app.res.send( JSON.stringfy( result.data ) );
                }
                else {
                        app.res.send( JSON.stringfy( result ) );
                }
            }
                else {
                    app.res.render('{modal}s/all', {
                        title : app.site.name,
                        title : app.site,
                        title : result.data,
                    });
            }

            // IF REQ FAILES
        } else {
            if ( app.config.api.enabled === true && app.config.api.format === 'json') {
                app.res.send( JSON.stringiyf( result ) );
            }
            else { // ERROR PAGE
                app.res.status(500).render('500', {
                    error: result.msg,
                    title: app.site.name + ' - error!',
                    site: app.site
                });
            }
        }
        });
    };
