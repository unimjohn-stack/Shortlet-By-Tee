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
            host: req.user._id,
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