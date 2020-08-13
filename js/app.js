const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');


let thingsRef;
let unsubscribe;

thingsRef = db.collection('things')

unsubscribe = thingsRef

    .orderBy('createdAt') // Requires a query
    .onSnapshot(querySnapshot => {
        // Map results to an array of li elements
        const items = querySnapshot.docs.map(doc => {
            return `${doc.data().image}`
        });
        const links = querySnapshot.docs.map(doc => {
            return `${doc.data().link}`
        });
        const images = document.getElementsByClassName("advertisement");
        var num = items.length;
        var ind;
        for (const element of images) {
            ind = Math.floor((Math.random() * num)); //random from 0-(num-1)
            console.log(items[ind] + " ! " + links[ind]);
            element.children[0].src = items.splice(ind, 1);
            element.href = links.splice(ind, 1);
            num--;
        }

    });