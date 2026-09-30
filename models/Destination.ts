import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    coverImage: { type: String },
    description: { type: String },
    bestTimeToVisit: { type: String },
    budgetRange: { type: String },
    howToGo: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
