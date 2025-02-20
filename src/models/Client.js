const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del cliente es obligatorio'],
            trim: true
        },
        date: {
            type: Date,
            default: Date.now // fecha de creación
        },
        garmentType: {
            type: String,
            required: [true, 'El tipo de prenda es obligatorio'],
            trim: true
        },
        measurements: {
            neck: { type: Number, default: 0},
            neckLineFront: { type: Number, default: 0}, // escote D
            neckLineBack: { type: Number, default: 0}, // escote T
            chest: { type: Number, default: 0}, // escote
            dartLength: { type: Number, default: 0}, // Largo pinza
            frontLenght: { type: Number, default: 0}, // Largo talle delantero
            backLenght: { type: Number, default: 0}, // Largo talle trasero
            backWidth: { type: Number, default: 0}, // Espalda
            armHoleFront : { type: Number, default: 0}, // Sisa D
            armholeBack: { type: Number, default: 0}, // Sisa T
            highWaist: { type: Number, default: 0}, // Cintura alta
            lowWaist: { type: Number, default: 0}, // Cintura baja
            blouseLength: { type: Number, default: 0}, // Largo blusa
            hip: { type: Number, default: 0 }, 
            hipDrop: { type: Number, default: 0 }, // bajada cadera
            kneeLength: { type: Number, default: 0 }, // largo rodilla
            kneeCircumference: { type: Number, default: 0 }, // contorno rodilla
            ankleLength: { type: Number, default: 0 }, // largo tobillo
            ankleCircumference: { type: Number, default: 0 }, // contorno tobillo
            floorLength: { type: Number, default: 0 }, // largo al piso
        }
    },
    {
        timestamps: true // cuando se creó y cuando se actualizó
    }
);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;