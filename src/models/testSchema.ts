import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    phone: String,
    is_true: Boolean
});

export default mongoose.model('TestModels', schema);
