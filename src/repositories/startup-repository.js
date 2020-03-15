'use strict';
const mongoose = require('mongoose');
const Startup = mongoose.model('Startup');

exports.get = async() => {
    const res = await Startup.find({}, 'profile_image founded_at name company_name short_description description tags slug closed_at is_verified created_at updated_at employees business_target business_phase business_model uf state city place is_active badges segments');
    return res;
}

exports.getById = async(id) => {
    const res = await Startup
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var startup = new Startup(data);
    await startup.save();
}

exports.update = async(id, data) => {
    await Startup
        .findByIdAndUpdate(id, {
            $set: {
                profile_image: data.profile_image,
                founded_at: data.founded_at,
                name: data.name,
                company_name: data.company_name,
                short_description: data.short_description,
                description: data.description,
                tags: data.tags,
                slug: data.slug,
                closed_at: data.closed_at,
                is_verified: data.is_verified,
                updated_at: data.updated_at,
                employees: data.employees,
                business_target: data.business_target,
                business_phase: data.business_phase,
                business_model: data.business_model,
                uf: data.uf,
                state: data.state,
                city: data.city,
                place: data.place,
                is_active: data.is_active,
				badges: data.badges,
				segments: data.segments
            }
        });
}

exports.delete = async(id) => {
    await Startup
        .findOneAndRemove(id);
}
