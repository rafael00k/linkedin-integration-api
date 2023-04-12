export function removeEmptyValues<Type extends Object> (object: Type): Type  {
    const  newObject = Object.keys(object).reduce((acc,cv) => {
        if(!!object[cv]) {
            acc[cv] = object[cv]    
        }
        return acc
    },{})
    return newObject as Type
  }
  
  export function removeArrayEmptyAvalues<Type>(array: Type[]): Type[] {
    return array.filter(Boolean)
  }
