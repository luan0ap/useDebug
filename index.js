import { useEffect } from "react"

const useDebug = (id = '') => {
  useEffect(() => {
    console.log(`__DEBUG_${id}__ mounted`)

    return () => {
      console.log(`__DEBUG_${id}__ unmounted`)
    }
  })
}

export default useDebug
