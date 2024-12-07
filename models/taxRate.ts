import { model } from "@medusajs/framework/utils"

export const AvaTaxRate = model.define("avaTaxRate", {
  id: model.id().primaryKey(),
  name: model.text(),
  rate: model.number(),
  postalCode: model.text()
})

// Created_at and Updated_at are created by the system. Can use Updated_at to make sure we have the most recent. Tax rates go into effect on Jan 1st or July 1st usually, but we'll update rates if last update was before the 1st of the current month

