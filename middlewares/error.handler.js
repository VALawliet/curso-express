function logErrors(err, req, res, next){
    console.log('logerrors');
    console.error(err);
    next(err)
}

function errorHandler(err, req, res, next){
    console.log('errorhandler');
    res.json({
        message: err.message,
        stack: err.stack
    });
}

function boomErrorHandler(err, req, res, next){

    console.log('entrando')

    if(err.isBoom){

        const { output } = err;
        console.log('output')
        console.log(output)
        res.status(output.statusCode).json(output.payload);

    }else{
        next(err)
    }

    
}


module.exports = { logErrors, errorHandler, boomErrorHandler}