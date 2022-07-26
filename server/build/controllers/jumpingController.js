"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jumpController = void 0;
class JumpingController {
    calculateMinWhipLength(req, res) {
        try {
            const width = req.params.w;
            const height = req.params.h;
            const min_value = Math.sqrt(Math.pow(height, 2) + Math.pow(width / 2, 2));
            const whip_length = min_value.toFixed(2);
            res.json({ whip_length });
        }
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
exports.jumpController = new JumpingController();
