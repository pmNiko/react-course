import { FirebaseDB } from '@/firebase/config';
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';

/**
 * Delete all documents from the collection
 */
export const FirebaseDeleteDocs = async (uid) => {
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const deletePromises = [];
  docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

  await Promise.all(deletePromises);
};
