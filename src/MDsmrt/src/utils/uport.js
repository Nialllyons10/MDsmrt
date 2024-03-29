import { Connect } from 'uport-connect'
import Web3 from 'web3'

const uportConnect = new Connect('uPort Demo', {
  network: 'rinkeby',
  accountType: 'keypair',
  description: 'uPort demo sample description',
})

const web3 = new Web3(uportConnect.getProvider())
web3.eth.defaultAccount = '0xB42E70a3c6dd57003f4bFe7B06E370d21CDA8087'
console.log(uportConnect.state)

export { web3, uportConnect }
