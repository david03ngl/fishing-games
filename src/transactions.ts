import { Transfer as TransferEvent } from "../generated/Transactions/Transactions"
import { Transfer } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.message = event.params.message
  entity.timestamp = event.params.timestamp
  entity.keyword = event.params.keyword
  entity.save()
}
