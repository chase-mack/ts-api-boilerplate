// export interface TestModel {
//     name: string,
//     phone: string,
//     is_true: boolean
// }

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    phone: String,
    is_true: Boolean
});

export default mongoose.model('TestModel', schema);
