import mongoose,  {model, Schema } from "mongoose";

interface ISettings {
    ownerId: string;
    businessName: string;
    supportEmail: string;
    knowledge: string;
}

const settingsSchema = new Schema<ISettings>({
    ownerId: {
        type: String,
        required: true,
        unique: true,
    },
    businessName: {
        type: String,
        default: ""
    },
    supportEmail: {
        type: String,
        default: ""
    },
    knowledge: {
        type: String,
        default: ""
    },
}, { timestamps: true })

const Settings = mongoose.models.Settings || model<ISettings>('Settings', settingsSchema)
export default Settings