import Room from "../Models/roomModel.js";

export const createRoom = async (req,res) => {
    try {
        const {
            title, description, location, pricePerNight, bedrooms, bathrooms, maxGuests, amenities, images
        } = req.body;
        if ( !title?.trim() || !description?.trim() || !location?.trim()  || pricePerNight == null || bedrooms == null || bathrooms == null || maxGuests == null) {
            return res.status(400).json({
                message: "All fields required"
            })
        }
        if ( pricePerNight < 1 ){
            return res.status(400).json({ message: "Price Per Night must be greater than 0"})
        }
        const room = await Room.create({
            // host: req.user._id,
            title,
            description,
            location,
            pricePerNight,
            bedrooms,
            bathrooms,
            maxGuests,
            amenities,
            images,
        });
        return res.status(201).json({
            message: "Room created successfully",
            room
        });

    } catch(error) {
        console.log("Error in createRoom Controller", error);
        res.status(500).json({ message: "Internal Server Error"});    
    }
}

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find({ isActive: true, });
        return res.status(200).json({ message: "Rooms fetched successfully", rooms});
    } catch(error) {
        console.log("Error in getAllRooms controller", error);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const getSingleRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: "Room not found"});
        }
        return res.status(200).json({ message: "Room found", room});
    } catch(error) {
        console.log("Error in getSingleRoom", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}

export const updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate( req.params.id,{ ...req.body }, { new: true });
        if(!room) {
            return res.status(404).json({ message: "Room not found"});
        }
        return res.status(200).json({ message: "Room updated successfully!", room});
    } catch(error) {
        console.log("Error in updateRoom controller", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}

export const deleteRoom= async (req,res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, {
            isActive: false, 
            deletedAt: new Date(),
        },{ new: true });
        if(!room) {
            return res.status(404).json({ message: "Room not found"});
        }
        return res.status(200).json({ message: "Room deleted Successfully", room});
    } catch(error) {
        console.log("Error in deleteRoom controller", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}