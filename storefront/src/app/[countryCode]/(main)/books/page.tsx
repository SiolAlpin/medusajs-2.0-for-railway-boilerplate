import { Metadata } from "next"

import { SortOptions } from "@modules/books/components/refinement-list/sort-products"
import StoreTemplate from "@modules/books/templates"

export const metadata: Metadata = {
  title: "Books",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
