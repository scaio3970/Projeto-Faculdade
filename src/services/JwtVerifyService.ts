import {decode} from 'jsonwebtoken'

export class JwtVerifyService{
    async decoder(token){
      if(!token){
        return undefined
      }
      const payload = decode(token)
      console.log(payload)
      return payload.user.id
    }
}
