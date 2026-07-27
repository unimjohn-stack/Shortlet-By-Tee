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
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: 1
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
        required: true,
    },
}, {
    timestamps: true
});

const Room = mongoose.model("Room", roomSchema);
export default Room;