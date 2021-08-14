'use strict ';

class Collection {

    constructor(model) {
        this.model = model;
    }

    async create(obj) {

        try {
            return await this.model.create(obj);
        } catch (e) {
            console.error('error while creating model: ', this.model.name)
        }
    }

    async read(id) {
        try {
            let records = null;
            if (id) {

                records = await this.model.findOne({ where: { id: id } });
            } else {

                records = await this.model.findAll();
            }
            return records;
        } catch (e) {
            console.error('error while reading model:  ', this.model.name, `id: ${id}`)
        }

    }

    async update(id, obj) {
        try {
            let recordById = await this.model.findOne({ where: { id } });
            let updated = await recordById.update(obj);
            return updated;
        } catch (e) {
            console.error('error while updating model:  ', this.model.name, `id: ${id}`)
        }

    }

    async delete(id) {

        if (!id) throw new Error(' There is no exists for this model: ', this.model.name);

        try {
            let deleted = await this.model.destroy({ where: { id } });
            return deleted;
        } catch (e) {
            console.error('error while deleting model: ', this.model.name, `id: ${id}`)
        }
    }
}

module.exports = Collection;