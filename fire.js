import firebase from './config'
import { firestore } from 'firebase';
  
class Fire {

    addPekerja = async ({nama_pekerja, userid, email, password, no_hp}) => {
        return new Promise(( res, rej ) => {
            this.firestore
                .collection("Pekerja")
                .doc(nama_pekerja)
                .set({
                    nama_pekerja,
                    userid,
                    email,
                    password,
                    no_hp,
                    uid: this.uid,
                    date: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    
    addAncu = async ({nama_pekerja, nama_tambak, berat_seluruh_udang, jumlah_udang,
         densitas, biomas, banyak_pakan, jenis_pakan, adg, fcr}) => {
        return new Promise(( res, rej) => {
            this.firestore
            .collection("Tambak")
            .doc(nama_tambak)
            .collection('Ancu')
            .add({
                nama_pekerja,
                nama_tambak,
                densitas,
                biomas,
                jenis_pakan,
                banyak_pakan,
                adg,
                fcr: biomas / banyak_pakan,
                abw : berat_seluruh_udang / jumlah_udang,
                berat_seluruh_udang,
                jumlah_udang,
                luas_ancu,
                date: this.timestamp(),
                uid: this.uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            });
        });
    };


    addManajer = async ({name,nama_perusahaan, userid, email, password}) => {
        return new Promise(( res, rej ) => {
            this.firestore
                .collection("User")
                .doc(nama_perusahaan)
                .set({
                    name,
                    nama_perusahaan,
                    userid,
                    email,
                    password,
                    date: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    addPost = async ({ nama_tambak, banyak_kincir, ketinggian, luas, ph_air, populasi_udang, tabur_benih, date }) => {
        // const remoteUri = await this.uploadPhotoAsync(localUri)
        return new Promise(( res, rej ) => {
            this.firestore
                .collection("Tambak")
                .doc(nama_tambak)
                .set({
                    nama_tambak,
                    banyak_kincir,
                    ketinggian,
                    luas,
                    ph_air,
                    tabur_benih,
                    populasi_udang,
                    date: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: this.uid,
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };


    updateTambak = async (tambak, updateComplete) => {
        tambak.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log(tambak);

        firebase.database
        .collection("Tambak")
        .doc(tambak.id).set(tambak)
        .then(() => updateComplete(tambak) )
        .catch((error) => console.log(error));

    }

    getPekerja = async (pekerjaRetreived) => {

        var pekerjaList = [];

        var snapshot = await firebase.firestore()
        .collection("Pekerja")
        .orderBy("date")
        .get()

        snapshot.forEach((doc) => {
            const pekerjaItem = doc.data();
            pekerjaItem.id = doc.id;
            pekerjaList.push(pekerjaItem);
        });

        console.log(pekerjaList);

        pekerjaRetreived(pekerjaList);
    }

    getAncu = async (ancuRetreived) => {
        var ancuList = [];

        var snapshot = await firebase.firestore()
        .collectionGroup("Ancu")
        .orderBy('date').limit(4)
        .get()

        snapshot.forEach((doc) => {
            const ancuItem = doc.data();
            ancuItem.id = doc.id;
            ancuList.push(ancuItem)
        });

        console.log(ancuList);

        ancuRetreived(ancuList);
    }

    getDailyAncu = async (ancuRetreived) => {
        var ancuList = [];

        var snapshot = await firebase.firestore()
        .collectionGroup("Ancu")
        .where("date" , "")
        .orderBy('date').limit(4)
        .get()

        snapshot.forEach((doc) => {
            const ancuItem = doc.data();
            ancuItem.id = doc.id;
            ancuList.push(ancuItem)
        });

        console.log(ancuList);

        ancuRetreived(ancuList);
    }

    getPekerjaAncu = async (ancuRetreived) => {
        var ancuList = [];

        var snapshot = await firebase.firestore()
        .collectionGroup("Ancu")
        .where('nama_pekerja', '==', nama_pekerja)
        .get()

        snapshot.forEach((doc) => {
            const ancuItem = doc.data();
            ancuItem.id = doc.id;
            ancuList.push(ancuItem)
        });

        console.log(ancuList);

        ancuRetreived(ancuList);
    }

    getAncuTambak = async (ancuRetreived, getDocument) => {
        var ancuList = [];

        var snapshot = await firebase.firestore()
        .collectionGroup("Ancu")
        .where('nama_tambak', '==', id)
        .get()

        snapshot.forEach((doc) => {
            const ancuItem = doc.data();
            ancuItem.id = doc.id;
            ancuList.push(ancuItem)
        });

        console.log(ancuList);

        ancuRetreived(ancuList);
    }

    getTambak = async (tambakRetreived) => {

        var tambakList = [];

        var snapshot = await firebase.firestore()
        .collection("Tambak")
        .get()

        snapshot.forEach((doc) => {
            const tambakItem = doc.data();
            tambakItem.id = doc.id;
            tambakList.push(tambakItem);
        });

        console.log(tambakList);

        tambakRetreived(tambakList);
    }

    

    get firestore() {
        return firebase.firestore()
    }

    uploadPhotoAsync = async uri => {
        const path = 'photos/${this.uid}/${Date.now}.jpg';

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date;
    }
}

Fire.shared = new Fire();
export default Fire;