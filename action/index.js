import firebase from '../config'

export function deleteTambak(tambak, deleteComplete) {
    console.log(tambak);

    firebase.firestore()
    .collection('Tambak')
    .doc(tambak.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}

export function deletePekerja(pekerja, deleteComplete) {
    console.log(pekerja);

    firebase.firestore()
    .collection('Pekerja')
    .doc(pekerja.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}

export function deleteAncu(ancu, deleteComplete) {
    console.log(ancu);

    firebase.firestore()
    .collection('Ancu')
    .doc(ancu.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}
