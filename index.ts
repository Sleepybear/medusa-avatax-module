import { Module } from "@medusajs/framework/utils"
import AvaTaxService from "./AvaTaxModule"

export const AVATAX_MODULE = "avaTax"

export default Module(AVATAX_MODULE, {
  service: AvaTaxService,
})
