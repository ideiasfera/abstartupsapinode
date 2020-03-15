'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    profile_image: {
        type: String
    },
    founded_at: {
        type: Date,
		default: null
    },
    name: {
        type: String
    },
    company_name: {
        type: String
    },
    short_description: {
        type: String
    },
    description: {
        type: String
    },
    tags: [{
        type: String
    }],
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    closed_at: {
        type: Date,
		default: null
    },
    is_verified: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
		default: null
    },
    employees: {
        type: String
    },	
    business_target: {
        type: String
    },	
    business_phase: {
        type: String
    },	
    business_model: {
        type: String
    },	
    uf: {
        type: String
    },	
    state: {
        type: String
    },	
    city: {
        type: String
    },	
    place: {
        type: String
    },	
    is_active: {
        type: Number
    },
    badges: [{
		name: {
			type: String
		},	
		profile_image: {
			type: String
		}
    }],
    segments: {
		primary: {
			type: String
		},	
		secondary: {
			type: String
		}
    }
});
	
module.exports = mongoose.model('Startup', schema);
