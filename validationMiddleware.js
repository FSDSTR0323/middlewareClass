



const ourValidator = (field) => (schema) => (req, res, next) => {
    console.log(`hola busco req[${field}] que es`, req[field]);
    if (field === 'query') {
        const userId = req.query.id;
        res.locals.userId = userId;
    }

    const { error } = schema.validate(req[field]);
    if (error) {
        res.status(422).json({ errormessage: error.details[0].message });
    } else {
        next();
    }
};


module.exports = { ourValidator }