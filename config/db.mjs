import mongoose from 'mongoose';
import { MONGO_URI } from './environment';

mongoose.connect(MONGO_URI)

export default mongoose

