/**
 * Code adapted from VueUse
 * 
 * Link: https://github.com/vueuse/vueuse/blob/main/packages/firebase/useAuth/index.ts
 */

import { ref, computed } from 'vue'
import { getAuth } from "firebase/auth";

export function useAuth() {
  const auth = getAuth()

  const loading = ref(true)
  const user = ref(auth.currentUser)
  const isAuthenticated = computed(() => !!user.value)

  auth.onIdTokenChanged(authUser => {
    user.value = authUser
    loading.value = false
  })

  return {
    auth,

    user,
    loading,
    isAuthenticated,
  }
}
