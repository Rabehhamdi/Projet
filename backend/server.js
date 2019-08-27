const express = require ("express")
const mongodb = require('mongodb')
const bodyParser = require("body-parser")
const assert = require("assert")
const multer= require('multer')
const app = express()
var cors = require('cors')
fs = require('fs-extra')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProjetFinalJS', { useNewUrlParser: true });
//////////////////image
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const upload = multer({
    storage
})


/////////////////

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     
    var aboutMe = new mongoose.Schema({ 
        niveaux:String
    });
    var evenement = new mongoose.Schema({ 
        titre: String,
        date_debut: String,
        date_finale: String,
        heure_debut: String,
        heure_final: String,
        localisation: String,
        description: String,
        img: String,
        
    });
    var actualite = new mongoose.Schema({  
        titre: String ,
        description: String ,
        img: String,
        date: String
    })
    var Offre = new mongoose.Schema({
        offre: String ,
        titre: String ,
        description: String ,
        date: String,
        id_responsable: String
    })
    var departement = new mongoose.Schema({
        titre: String ,
        chef_departement: String ,
        img: String ,
        description: String
    })
    var Entreprise = new mongoose.Schema({
        Nom: String  ,
        Description: String,
        Email: String,
        Domaine: String,
        img: String
    })
    var Etudiant = new mongoose.Schema({
        img: String,
        nom: String,
        prenom: String,
        Email: String,
        NumTel: String,
        adresse: String,
        description: String,
        date_naissance: String,
        niveau: String
    })
    var Matiere = new mongoose.Schema({ 
        Matiere: String,
        Coffision: String,
        nbrheure: String,
        Prof: String
    })
    var Emploi = new mongoose.Schema({
        formation:String,
        niveaux: String,
        pdf: String
    })
    var Formation = new mongoose.Schema({
        nom: String,
        description: String,
        TabMatiere: [id = mongoose.Schema.Types.ObjectId]
    })
     
    var aboutMe = mongoose.model('aboutMe', aboutMe);
    var evenement = mongoose.model('evenement', evenement);
    var actualite = mongoose.model('actualite', actualite); 
    var offre = mongoose.model('offre', Offre)
    var departement = mongoose.model('departement', departement)
    var Entreprise = mongoose.model('Entreprise', Entreprise)
    var Etudiant = mongoose.model('Etudiant', Etudiant)
    var Matiere = mongoose.model('Matiere', Matiere)
    var Emploi = mongoose.model('Emploi', Emploi)
    var Formation = mongoose.model('Formation', Formation)

// const mongoURL ="mongodb://localhost:27017"
// const data ="ProjetFinalJS"
 
// mongodb.MongoClient.connect(mongoURL,{useNewUrlParser: true},{useUnifiedTopology: true},(err,client)=>{
//     assert.equal(err,null,'connection err')
//     const db = client.db(data)

    app.post("/ajouteEvenement", upload.single('img'), function (req, res, next) {
        var item = {
            titre: req.body.titre,
            date_debut: req.body.date_debut,
            date_finale: req.body.date_finale,
            heure_debut: req.body.heure_debut,
            heure_final: req.body.heure_final,
            localisation: req.body.localisation,
            description: req.body.description,
            img: req.body.img
        };
        var data = new evenement(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });

    });

    app.post("/ajouteFormation", function (req, res, next) {
        var item = { 
            nom: req.body.nom,
            description: req.body.description,
            TabMatiere: req.body.TabMatiere
        };
        var data = new Formation(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });

    });
    

    app.post("/ajouteactualite", (req, res) => {
        var item = {  
            titre: req.body.titre,
            description: req.body.description,
            img: req.body.img,
            date: req.body.date
        };
        var data = new actualite(item); 
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })

    app.post("/ajouteOffre", (req, res) => {
        var item = {
            offre: req.body.offre,
            titre: req.body.titre,
            description: req.body.description,
            date: req.body.date
        }
        var data = new offre(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    }) 

    app.post("/ajoutedepartement", (req, res) => {
        var item = {  
            titre: req.body.titre,
            chef_departement: req.body.chef_departement,
            img: req.body.img,
            description: req.body.description
        }
        var data = new departement(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })
    
    app.post("/ajouteEntreprise", (req, res) => {
        var item = { 
            Nom: req.body.Nom,
            Description: req.body.Description,
            Email: req.body.Email,
            Domaine: req.body.Domaine,
            img: req.body.img
        }
        var data = new Entreprise(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })

    app.post("/ajouteetudiant", (req, res) => {
        var item = {
            img: req.body.img,
            nom: req.body.nom,
            prenom: req.body.prenom,
            Email: req.body.Email,
            NumTel: req.body.NumTel,
            adresse: req.body.adresse,
            description: req.body.description,
            date_naissance: req.body.date_naissance,
            niveau: req.body.niveau
        }
        var data = new Etudiant(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })
    

    app.post("/ajouteMatiere", (req, res) => {
        var item = {
            Matiere: req.body.Matiere  ,
            Coffision: req.body.Coffision  ,
            nbrheure: req.body.nbrheure  ,
            Prof: req.body.Prof  ,
            
        }
        var data = new Matiere(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })

    app.post("/AjouteEmploidetemp", (req, res) => {
        var item = { 
            formation: req.body.formation,
            niveaux: req.body.niveaux,
            pdf: req.body.pdf 
        }
        var data = new Emploi(item);
        data.save((err, data) => {
            if (err)
                res.send("err")
            else
                res.send(data)
        });
    })
    //////////////

    app.get("/afiicheAboutMe", (req, res) => {
        aboutMe.find()
            .then(function (doc) {
                res.render( { items: doc });
            });
    })




    app.get("/afficheEvenement" ,(req,res,next)=>{ 
        evenement.find()
            .then(function (doc) {
                res.send(doc );
            });
    })
    app.get("/afficheActualite", (req, res) => {
        actualite.find()
            .then(function (doc) {
                res.send(doc);
            });
    })

    app.get("/OffreDeEntreprise", (req, res) => {
        offre.find()
            .then(function (doc) {
                res.send(doc);
            });
    })

    app.get("/afiicheOffres", (req, res) => {
        offre.find()
            .then(function (doc) {
                res.send(doc);
            });
    })
 

    app.get("/afficheDepartement", (req,res)=>{
        departement.find()
            .then(function (doc) {
                res.send(doc);
            });
    })

    app.get("/afficheEntreprise",(req,res)=>{
        Entreprise.find()
            .then(function (doc) {
                res.send(doc);
            });
    })

    app.get("/afficheEtudiant",(req,res)=>{
        Etudiant.find()
            .then(function (doc) {
                res.send(doc);
            });
    }) 

    app.get("/afiicheMatiere",(req,res)=>{
        Matiere.find()
            .then(function (doc) {
                res.send(doc);
            });
    })

    

    

    app.get("/afiicheEmploidetemp", (req, res) => {
        Emploi.find()
            .then(function (doc) {
                res.send(doc);
            });
        })

    app.get("/afiicheYOUREmploidetemp", (req, res) => {
        Emploi.find()
            .then(function (doc) {
                res.send(doc);
            });
    })
     

    
///////////////////////////////
 

     
 



    

    /////////////////////////////
    ///////////////////////////////
    app.delete('/supprimerOffre/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("Offre").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err) 
                res.send(err)
            else 
                res.send(data)

        })
    })

    app.delete('/supprimerentreprise/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("entreprise").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err)
                res.send(err)
            else
                res.send(data)

        })
    })

    app.delete('/supprimerevenement/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("evenement").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err)
                res.send(err)
            else
                res.send(data)

        })
    })

    app.delete('/supprimeretudiant/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("etudiant").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err)
                res.send(err)
            else
                res.send(data)

        })
    })

    app.delete('/supprimeractualite/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("actualite").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err)
                res.send(err)
            else
                res.send(data)

        }) 
    })


    app.delete('/supprimerEmploidetemp/:id', (req, res) => {
        let recherche = mongodb.ObjectID(req.params.id)

        db.collection("Emploidetemp").findOneAndDelete({ _id: recherche }, (err, data) => {
            if (err)
                res.send(err)
            else
                res.send(data)

        })
    })
    //////////////////////////
    /////////////////////////
  


    app.put('/Modificationactualite/:id', (req, res,next) => {
        let id = req.params.id
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;

        actualite.findByIdAndUpdate({ _id: id },{
                titre : req.body.titre ,
                description : req.body.description ,
                img : req.body.img,
                date: today
            }).then(()=>{
                actualite.findOne({_id:id}).then((x)=>{
                    res.send(x)
                })
            })
        }) 

     

    app.put('/ModificationEvenement/:id', (req, res) => {
       
        let id = req.params.id
        evenement.findByIdAndUpdate({_id:id},{ 
            titre: req.body.titre,
            date_debut: req.body.date_debut,
            date_finale: req.body.date_finale,
            heure_debut: req.body.heure_debut,
            heure_final: req.body.heure_final,
            localisation: req.body.localisation,
            description: req.body.description ,
            img: req.body.img  
        }).then(() => {
            evenement.findOne({_id:id}).then((y) => {
                res.send(y)
            })
        })
    })

})


app.listen(4444,(err)=>{
    if(err)
        console.log("server err")
    else
        console.log("server is running on port 4444")
})