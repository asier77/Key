import {Request, Response } from 'express';

class SwitchingController {

    public calculateWeight(req: Request, res: Response) { 

        try {
            const idol_density: any = 19.3;

            console.log("Idol volume: " +req.body.idol_volume);

            const weight: any = idol_density * req.body.idol_volume;
            const idol_weight=weight.toFixed(3);

            res.json({idol_weight});
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}

export const switchController = new SwitchingController();