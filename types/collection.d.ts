interface Collection {
  id: string
  name: string
  createdBy: string
  discovery_year: string
  origin: string
  thumbnail: string
}

interface CollectionCreate {
  name: string
  createdBy: string
  discovery_year: string 
  origin: string 
  images: File[] 
  description: string
}

interface CollectionCreateErrors {
  name?: Array,
  createdBy?: Array,
  discovery_year?: Array
  origin ?: Array
  description?: Array
}
