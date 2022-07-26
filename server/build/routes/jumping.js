"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JumpingController_1 = require("../controllers/JumpingController");
class EstablecimientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/establecimientos', JumpingController_1.jumpController.getEstablecimientos);
    }
}
const estabsRoutes = new EstablecimientosRoutes();
exports.default = estabsRoutes.router;
