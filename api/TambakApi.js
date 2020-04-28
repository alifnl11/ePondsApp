import  firebase from 'firebase';
import 'firebase/firestore';

export function addTambak(tambak, addComplete){

    firebase.firestore()
    .collection('Tambak')
    .add({
        name : tambak.name,
        banyak_kincir : tambak.banyak_kincir,
        ketinggian : tambak.ketinggian,
        luas : tambak.luas,
        ph_air: tambak.ph_air,
        tabur_benih : tambak.tabur_benih,
        date: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));

}

export async function getTambak(tambakRetreived){

    var tambakList = [];

    var snapshot = await firebase.firestore()
    .collection('Tambak')
    .orderBy('date')
    .get()

    snapshot.forEach((doc) => {
        tambakList.push(doc.data());
    });

    tambakRetreived(tambakList);
}