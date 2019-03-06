import * as express from "express";

export = (() => {

    const router = express.Router();

    router.get("/admin", (req, res) => {
        res.json({success: true});
    });

    return router;
})();
