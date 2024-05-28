import Controller from "../controllers/controller.js";
const controller = new Controller();
const Router = {
    'post': {
        '/qr': (request, response) => {
            try {
                controller.qr(request, response);
            } catch (e) {
                console.log("Error in router", e);
            }
        }
    },
    'get': {
    }

}
export default Router;