import { formatsByName } from '@ensdomains/address-encoder'

export const ensConfig = {
  ens: {
    '20': {
      ensAddress: '0x0d4D469653810fBBeea4Eb58c1f6841B22F3049a',
      tld: 'ela',
      currency: 'ELA',
      placeholderRecords: ['ELA', 'DID', 'DOGE', 'LTC', 'BTC'],
      blockExplorer: {
        subdomain: 'eth',
        domain: 'elastos.io'
      },
      decoder: formatsByName['ETH'].decoder,
      dnsRegistrar: '0x6A489732c0fd78940759cde49fb24d6FEBA6AecB',
      rpc: 'https://escrpc.elaphant.app'
    },
    '80001': {
      ensAddress: '0x28fE6F94566e39d22C82906b42c17fe9e44362b0',
      tld: 'matic',
      currency: 'MATIC',
      placeholderRecords: ['MATIC', 'DID', 'DOGE', 'LTC', 'BTC'],
      blockExplorer: {
        subdomain: 'mumbai',
        domain: 'polygonscan.com'
      },
      decoder: formatsByName['ETH'].decoder,
      dnsRegistrar: '0x6A489732c0fd78940759cde49fb24d6FEBA6AecB'
    },
    '97': {
      ensAddress: '0x8AE7762E47eC0bE21c25c5EBB5d6E0B768Fc117d',
      tld: 'bnb',
      currency: 'BNB',
      placeholderRecords: ['BNB', 'DID', 'DOGE', 'LTC', 'BTC'],
      blockExplorer: {
        subdomain: 'testnet',
        domain: 'bscscan.com'
      },
      decoder: formatsByName['ETH'].decoder,
      dnsRegistrar: '0x6A489732c0fd78940759cde49fb24d6FEBA6AecB'
    }
  }
}
