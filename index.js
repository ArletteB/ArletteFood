const express = require('express');

const app = express();
app.use(express.json());



let articles = require('./articles.json')
 console.log(articles)

let categories = require('./categories.json')
 console.log(categories)

app.listen(3002, () => {
    console.log("Tu waze quoi man?")
})
    //Partie des Articles

app.get('/articles', (req,res) => {
    res.status(200).json(articles)
});

// Pour Afficher les données via l'Id

app.get('/articles/:id', function(req, res)  {
    const id = req.params.id;
   // trouver des articles qui correspond à la variable de l'id
    articles.forEach(article=> {
        if (article.id == id) {
            console.log(article)
             res.status(200).json(article)   
        }
   });    
}); 

// Créer des Articles

app.post('/articles', (req, res) => {
    const article = req.body;
    console.log(article);
    articles.push(article); 
    console.log(req.body);
    res.status(201).json(articles);
});


// Modifier un Articles

app.put('/articles/:id', function(req, res)  {
    // Je déclare la constante pour récupérer les param correspondant à l'id.
    const id = req.params.id;
    // Puis je déclare la variable articleModify afin de récupérer tout ce qui se trouve dans le body
    const articleModify = req.body;
    // Je fais une boucle. À chaque tour d'article il passe l'index de l'article
    articles.forEach((article, index) => {
        // Si l'Id de l'article passé dans la root est égale à Id se trouvant dans le tableau,
        if (article.id == id) {
            // il récupère dans le tableau articles l'index qui correspond à l'Id passé dans la root et le modifie par l'article modifié(ArticleModify).
            articles[index] = articleModify;
            res.status(200).json(articles)            
        }
   });   
});

// Supprimer un Article

app.delete('/articles/:id', function(req, res)  {
    // Je déclare ma constante 
    const id = +req.params.id;
    // La constante articleList supprime à travers le ".filter" supprime dans la liste des Articles l'article si l'Id passé dans la root correspond à l'Id se trouvant dans la liste des Articles
    const articleList = articles.filter((article) => article.id !== id)
    articles = articleList;
    res.status(200).json(articleList)  
    
});     
       
      //-----------------------//
     // Partie des Catégories //
    //______________________ //

    app.get('/categories', (req,res) => {
        res.status(200).json(categories)
    });
    
    // Pour Afficher les données via l'Id
    
    app.get('/categories/:id', function(req, res)  {
        const id = req.params.id;
       // trouver les catgories qui correspond à la variable de l'id
        categories.forEach(categorie=> {
            if (categorie.id == id) {
                console.log(categorie)
                 res.status(200).json(categorie)   
            }
       });    
    }); 

    // Ajouter une Categorie
    app.post('/categories', (req, res) => {
        const categorie = req.body;
        console.log(categorie);
        categories.push(categorie); 
        console.log(req.body);
        res.status(201).json(categories);
    });
    
    
    // Modifier un categories
    
    app.put('/categories/:id', function(req, res)  {
        // Je déclare la constante pour récupérer les param correspondant à l'id.
        const id = req.params.id;
        // Puis je déclare la variable categorieModify afin de récupérer tout ce qui se trouve dans le body 
        const categorieModify = req.body;
        // Je fais une boucle. À chaque tour d'une categorie il passe l'index de la categorie
        categories.forEach((categorie, index) => {
            // Si l'Id de la categorie passé dans la root est égale à Id se trouvant dans le tableau,
            if (categorie.id == id) {
                // il récupère dans le tableau categories l'index qui correspond à l'Id passé dans la root et le modifie par la categorie modifié(categorieModify).
                categories[index] = categorieModify;
                res.status(200).json(categories)            
            }
       });   
    });
    
    // Supprimer un categorie
    
    app.delete('/categories/:id', function(req, res)  {
        // Je déclare ma constante 
        const id = +req.params.id;
        // La constante categorieList à travers le ".filter" supprime dans la liste des categories la categorie si l'Id passé dans la root correspond à l'Id se trouvant dans la liste des categories
        const categorieList = categories.filter((categorie) => categorie.id !== id)
        categories = categorieList;
        res.status(200).json(categorieList)  
        
    });     