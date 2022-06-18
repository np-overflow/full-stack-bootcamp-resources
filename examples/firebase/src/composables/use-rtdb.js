/**
 * Code adapted from VueUse
 * 
 * Link: https://github.com/vueuse/vueuse/blob/main/packages/firebase/useRTDB/index.ts
 */

import { ref } from 'vue'
import { getDatabase, onValue, ref as dbRef } from "firebase/database";

export function useRTDB(path) {
  const data = ref(undefined)

  const database = getDatabase()
  const docRef = dbRef(database, path)

  onValue(docRef, (snapshot) => {
    data.value = snapshot.val()
  })

  return { data, database }
}
