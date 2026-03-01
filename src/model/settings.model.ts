import mongoose, { model, Schema } from "mongoose";

interface ISettings {
    ownerId: string;
    businessName: string;
    supportEmail: string;
    knowledge: string;
    // Stripe Billing Fields
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    plan: 'free' | 'pro' | 'enterprise';
    messagesUsed: number;
    billingPeriodEnd: Date | null;
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

    // ✅ Stripe Billing Fields
    stripeCustomerId: {
        type: String,
        default: null
    },
    stripeSubscriptionId: {
        type: String,
        default: null
    },
    plan: {
        type: String,
        enum: ['free', 'pro', 'enterprise'],
        default: 'free'
    },
    messagesUsed: {
        type: Number,
        default: 0
    },
    billingPeriodEnd: {
        type: Date,
        default: null
    },

}, { timestamps: true })

const Settings = mongoose.models.Settings || model<ISettings>('Settings', settingsSchema)
export default Settings