<script setup lang="ts">
const transactionStore = useTransactionStore()
const items = $computed(() => transactionStore.transactionItems)

const counts = $computed(() => {
  if (items) {
    let received = 0
    let sent = 0
    items?.forEach((item) => {
      if (item.type === 'receive')
        received++
      else if (item.type === 'send')
        sent++
    })
    return {
      received,
      sent,
    }
  }
})
</script>

<template>
  <div panel>
    <div flex lt-md:flex-col justify-between mb-2>
      <h2 flex="1/3" panel-title>
        Activity
      </h2>
      <div flex="~ 2/3" lt-md:justify-between>
        <div flex md:flex="1/3" justify-center items-center>
          <div flex items-center md:ml-2 text-xs text-dim>
            <div w-2 h-2 bg-green-500 rounded-full mr-1 />In ({{ counts?.received || '?' }})
          </div>
          <div flex items-center ml-4 text-xs text-dim>
            <div w-2 h-2 bg-orange-500 rounded-full mr-1 />Out ({{ counts?.sent || '?' }})
          </div>
        </div>
        <div flex md:flex="1/3" justify-end items-center text-sm>
          <div text-dim mr-3>
            30d
          </div>
          <div text-dim mr-3>
            3m
          </div>
          <div px-2 py-2px bg-element font-bold rounded-md mr-2>
            1y
          </div>
          <div text-dim md:mr-3>
            max
          </div>
        </div>
      </div>
    </div>
    <TransactionChartTimeline v-if="items" :items="items" />
  </div>
</template>
