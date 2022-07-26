"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jumpingController_1 = require("../controllers/jumpingController");
class JumpingRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/indiana-asierperez.azaldegui/whip-jump/:w/:h', jumpingController_1.jumpController.calculateMinWhipLength);
    }
}
const jumpRoutes = new JumpingRoutes();
exports.default = jumpRoutes.router;
