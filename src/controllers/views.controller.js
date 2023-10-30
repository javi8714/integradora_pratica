import { ProductManagerMongo } from "../dao/managers/productManagerMongo.js";
const p = new ProductManagerMongo();
export class ViewController {
    static renderHome = (req, res) => {
        const listadeproductos = p.getProductsView()
        res.render("realtimeproducts");
    }

    static rendeRealTimeProducts = (req, res) => {
        res.render("realtimeproducts");
    }

    static renderChat = (req, res) => {
        res.render("chat");
    }

    static renderRegistro = (req, res) => {
        res.render("signup");
    }

    static renderLogin =  (req, res) => {
        res.render("login");
    }

    static renderCambioPassword = (req, res) => {
        res.render("changePassword");
    }

    static renderProfile = (req, res) => {
        res.render("profile", { user: req.user });
        
    }
    static renderProfile = (req, res) => {
        res.render("profile", { user: req.user });
        
    }
    static renderForgot = (req,res)=>{
        res.render("forgotPassword");
    };

    static renderResetPass = (req,res)=>{
        const token = req.query.token;
        res.render("resetPassword",{token});
    };


}