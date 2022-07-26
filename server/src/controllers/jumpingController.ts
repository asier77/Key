import {Request, Response } from 'express';

class JumpingController {

    public calculateMinWhipLength(req: Request, res: Response) { 

        try {
            const width: any = req.params.w;
            const height: any = req.params.h;

            const min_value = Math.sqrt(Math.pow(height, 2) + Math.pow(width/2, 2));
            const whip_length=min_value.toFixed(2);

            res.json({whip_length});
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}

export const jumpController = new JumpingController();
