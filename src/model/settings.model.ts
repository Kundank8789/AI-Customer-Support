import mongoose,  {model, Schema } from "mongoose";

interface ISettings {
    OwnerId: string;
    businessName: string;
    supportEmail: string;
    Knowledge: string;
}

const settingsSchema = new Schema<ISettings>({
    OwnerId: {
        type: String,
        required: true,
        unique: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    supportEmail: {
        type: String,
        required: true,
    },
    Knowledge: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Settings = mongoose.models.Settings || model<ISettings>('Settings', settingsSchema)
export default Settings