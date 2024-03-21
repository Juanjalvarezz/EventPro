const User = require('../models/userModel');
const createError = require ('../utils/appError');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de Usuarios
exports.singup = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return next(new createError("Usuario ya existe", 400));
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'user', // Si no se proporciona un rol, se establece como 'user'
        });

        // JWT
        const token = jwt.sign({_id: newUser._id}, 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(201).json ({
            status: 'Exitoso',
            message: 'Usuario Registrado correctamente',
            token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
        });

    } catch (error) {
        next(error);
    }
};

// Login de Usarios
exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if(!user) return next(new createError("Usuario no encontrado", 404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return next(new createError('Email o Contraseña Invalido', 401));
        }

          // JWT
          const token = jwt.sign({_id: user._id}, 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'Exitoso',
            token,
            message: 'Inicio de sesion exitoso',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};