import {check, validationResult} from 'express-validator'

exports.rules = [
    check('name').trim().isLength({min: 1}).withMessage('required'),
]

exports.validate = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.render('rooms/create', {
            validated: req.body,
            errors: errors.mapped(),
        })
    }

    next()
}