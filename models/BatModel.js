'use strict';

const { response } = require('express');
const db = require('./conn');

class BatModel {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM bats;`
            )
            console.log(response);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.any(
                `SELECT * FROM reviews 
                INNER JOIN bats 
                ON reviews.bat_id = bats.id 
                WHERE bats.slug='${slug}';`
            )
            console.log(response);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = BatModel;