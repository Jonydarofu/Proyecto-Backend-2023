const {Router} = require ('express')
const  router = Router();

//memoria - file - base de datos

router.get('/session', (req, res)=>{
    if(req.session.counter){
        req.session.counter++
        res.send(' Ud a visitado el sitio ${req.session.counter} veces');

    }else{
        req.session.counter = 1
        res.send('Bienvencido a la pagina')
    }
})

router.get('/logout', (req, res)=> {
    req.session.destroy(error =>{
        if(error) return res.send ('Logout error')
        res.send({status: 'success', message: 'logout ok'})
    })
})

router.get('/setCookie', (req, res)=> {
    res.cookie('CoderCookie','esta es una cookie', {maxAge:100000}).send('seteando cookie')
})
router.get('/getcookie', ( req, res) => {
    console.log(req.cookies);
    res.send(req.cookies)
})

router.get('/setCookie', (req, res) => {
    res.cookie('CoderCookie','esta es una cookie firmada',{maxAge: 100000, signed: true}).send('seteando cookie')})

router.get ('/getcookieSigned', ( req, res) =>{
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

router.get('deletecookie', ( req, res) =>{
    res.clearCookie("CoderCookie").send('Borrado de Cookie')
})
 module.exports=router;