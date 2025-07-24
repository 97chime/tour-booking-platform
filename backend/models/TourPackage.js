
import mongoose from 'mongoose';

const tourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days
  availableDates: [{ type: Date }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('TourPackage', tourPackageSchema);
