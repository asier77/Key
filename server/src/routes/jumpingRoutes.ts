import { Router } from 'express';
import { jumpController } from '../controllers/jumpingController';

class JumpingRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/indiana-asierperez.azaldegui/whip-jump/:w/:h', jumpController.calculateMinWhipLength);
    }
}

const jumpRoutes = new JumpingRoutes();
export default jumpRoutes.router;