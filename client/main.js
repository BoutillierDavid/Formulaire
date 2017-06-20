Contacts = new Mongo.Collection('contacts');
import {
    Accounts
} from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

Template.formulaire.events({
    'submit #myForm': function() {

        event.preventDefault();

        var prenom = event.target.prenom.value;
        var nom = event.target.nom.value;
        var courriel = event.target.courriel.value;
        var telephone = event.target.telephone.value;
        var adresse = event.target.adresse.value;
        var ville = event.target.ville.value;
        var province = event.target.province.value;
        var codePostal = event.target.codePostal.value;
        var pays = event.target.pays.value;
        var commentaire = event.target.commentaire.value;

        Contacts.insert({
            prenom: prenom,
            nom: nom,
            courriel: courriel,
            telelephone: telephone,
            adresse: adresse,
            ville: ville,
            province: province,
            codePostal: codePostal,
            pays: pays,
            commentaire: commentaire
        });
    }
});


Template.postsList.helpers({
    posts: function() {
        return Contacts.find();
    }
});
