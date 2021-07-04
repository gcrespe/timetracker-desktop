import PetOwnerStore from './Store'
import LoginStore from './Login'

export const Stores = {
    store: new PetOwnerStore(),
    login: new LoginStore()
}