"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchController = void 0;
class SwitchingController {
    calculateWeight(req, res) {
        try {
            const idol_density = 19.3;
            console.log("Idol volume: " + req.body.idol_volume);
            const weight = idol_density * req.body.idol_volume;
            const idol_weight = weight.toFixed(3);
            res.json({ idol_weight });
        }
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
exports.switchController = new SwitchingController();
