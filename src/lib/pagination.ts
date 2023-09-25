import { Contact } from '@/interfaces/Contact-Interface'
import { useGetContactsQuery } from '@/redux/features/api/baseApi'
import { useCallback, useEffect, useState } from 'react'

interface DataSet {
  data: Contact[] // Array of contact data
  pagination: number // Pagination index
}

const SlicedData = () => {
  // initialize state to store contact data and pagination
  const [contacts, setContacts] = useState<DataSet | undefined>()

  // extract data from redux query
  const { data, isLoading } = useGetContactsQuery()

  // function to slice the contact data based on a start index
  const reSlice = useCallback(
    (startIndex: number = 0) => {
      const endIndex = startIndex + 12
      setContacts({
        data: data?.slice(0, endIndex) ?? [],
        pagination: endIndex,
      })
    },
    [data]
  )

  useEffect(() => {
    if (!contacts && !isLoading) {
      reSlice() // Call the "reSlice" function to slice data
    }
  }, [contacts, isLoading, reSlice])

  return {
    contacts: contacts?.data, // The sliced contact data
    isLoading,
    reSlice,
    pagination: contacts?.pagination, // Pagination index
  }
}

export default SlicedData
