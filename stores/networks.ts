import { utils as ethersUtils } from 'ethers'
import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    homestead: NetworkData
    optimism: NetworkData
    arbitrum: NetworkData
    matic: NetworkData
    gnosis: NetworkData
    zksync: NetworkData
  } => {
    return {
      homestead: {},
      optimism: {},
      arbitrum: {},
      matic: {},
      gnosis: {},
      zksync: {},
    }
  },
  actions: {
    async updateHomesteadNetwork() {
      try {
        const provider = await useDefaultProvider('homestead')
        this.homestead.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.homestead.gasPrice = Math.round(+ethersUtils.formatUnits(gp, 'gwei'))
        this.homestead.status = 'connected'
      }
      catch {
        this.homestead.status = 'error'
      }
      return Promise.resolve()
    },
    async updateMaticNetwork() {
      try {
        const provider = await useDefaultProvider('matic')
        this.matic.blocknumber = await provider!.getBlockNumber()
        const gp = await provider!.getGasPrice()
        this.matic.gasPrice = Math.round(+ethersUtils.formatUnits(gp, 'gwei'))
        this.matic.status = 'connected'
      }
      catch {
        this.homestead.status = 'error'
      }
      return Promise.resolve()
    },
    async updateNetworkData() {
      console.log('Updating networks (10s interval)')
      const res = await Promise.all([
        this.updateHomesteadNetwork(),
        this.updateMaticNetwork(),
      ])
      return res
    },
  },
  persist: {
    paths: [

    ],
  },
})
