import { Router } from 'express';
import { switchController } from '../controllers/switchingController';

class SwitchRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/indiana-asierperez.azaldegui/switch-idol/', switchController.calculateWeight);
    }
}

const switchRoutes = new SwitchRoutes();
export default switchRoutes.router;