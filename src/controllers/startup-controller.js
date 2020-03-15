'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/startup-repository');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            profile_image: req.body.profile_image,
            founded_at: req.body.founded_at,
            name: req.body.name,
            company_name: req.body.company_name,
            short_description: req.body.short_description,
            description: req.body.description,
            tags: req.body.tags,
            slug: req.body.slug,
            closed_at: req.body.closed_at,
            is_verified: req.body.is_verified,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            employees: req.body.employees,
            business_target: req.body.business_target,
            business_phase: req.body.business_phase,
            business_model: req.body.business_model,
            uf: req.body.uf,
            state: req.body.state,
            city: req.body.city,
            place: req.body.place,
            is_active: req.body.is_active,
            badges: req.body.badges,
            segments: req.body.segments
        });
        res.status(201).send({
            message: 'Startup cadastrada com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Startup atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Startup removida com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};