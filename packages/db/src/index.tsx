import * as React from 'react';
import mongoose from "mongoose";

const subscriber = new mongoose.Schema({
    username: {type:String}
})

export const Subscriber = mongoose.model('Subscriber', subscriber);