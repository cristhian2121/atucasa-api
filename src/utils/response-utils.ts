import { ResponseKH } from "../interfaces/utils/utils.interface"

const responseOk = ({ code, message, data }: ResponseKH): ResponseKH => {
  return {
    state: true,
    code : code || 200,
    message: message || 'Ok',
    data: data || null,
  }
}
