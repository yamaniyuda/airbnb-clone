class Helper {
  
  public static existParamsInUrl = (url: string, search: string) : boolean => {
    const urlObj = new URL(url)
    const searchParams = new URLSearchParams(urlObj.search)
    const check = searchParams.get(search)

    if (check) return true
    return false
  }


  public static existMultiplyParamsInUrl = (url: string, search: string[]): boolean => {
    const checks = search.every(data => Helper.existParamsInUrl(url, data) == true)
    return checks
  } 

}

export default Helper