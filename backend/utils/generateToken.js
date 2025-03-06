import jwt from 'jsonwebtoken';

export const generateToken = (user, res, message, statusCode = 200) => {
    const accessToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Set the accessToken as a HTTP-only cookie with an expiration time of 7 days
    res.status(statusCode).cookie("accessToken", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
        secure: process.env.NODE_ENV === 'Development' ? false : true,
    }).json({
        success: true,
        message,
    });
};

export const AdminToken = (user, res, message, statusCode = 200) => {
    const adminToken = jwt.sign({ _id: user._id }, process.env.ADMIN_JWT_SECRET);

    // Set the adminToken as a HTTP-only cookie with an expiration time of 2 days
    res.status(statusCode).cookie("adminToken", adminToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        sameSite: process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
        secure: process.env.NODE_ENV === 'Development' ? false : true,
    }).json({
        success: true,
        message,
    });
};
