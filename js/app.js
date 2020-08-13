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
        const images = document.getElementsByClassName("img");
        var num = items.length;
        var ind;
        for (const element of images) {
            ind = Math.floor((Math.random() * num)); //random from 0-(num-1)
            console.log(items[ind]);
            element.src = items.splice(ind, 1);
            num--;
        }

    });