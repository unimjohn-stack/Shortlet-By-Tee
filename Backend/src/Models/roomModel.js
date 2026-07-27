import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: 1
    },
    bathrooms: {
        type: Number,
        required: true,
        min: 1,
    },
    bedrooms: {
        type: Number,
        required: true,
        min: 1,
    },
    maxGuests: {
        type: Number,
        required: true,
        min: 1
    },
    amenities: {
        type: [String],
        default: [],
    },
    images: {
        type: [String],
        default: [],
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

const Room = mongoose.model("Room", roomSchema);
export default Room;