import { ITaxProvider } from "@medusajs/framework/types"
import { AvaTaxRate } from "./models/taxRate"

export default class AvaTaxProvider implements ITaxProvider { 

  static identifier = "ava-tax";

  constructor(container, options) {
 

  }

  async getTaxLines(
     itemLines: TaxTypes.ItemTaxCalculationLine[],
     shippingLines: TaxTypes.ShippingTaxCalculationLine[],
     ctx: TaxCalculationContext
  ): Promise<(TaxTypes.ItemTaxLineDTO | TaxTypes.ShippingTaxLineDTO)[]> {


  }

}

export default AvaTaxService
