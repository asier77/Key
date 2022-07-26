"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const switchingController_1 = require("../controllers/switchingController");
class SwitchRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/indiana-asierperez.azaldegui/switch-idol/', switchingController_1.switchController.calculateWeight);
    }
}
const switchRoutes = new SwitchRoutes();
exports.default = switchRoutes.router;
